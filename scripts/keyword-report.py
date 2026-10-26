#!/usr/bin/env python3
"""Measure where each page's primary/secondary keywords appear in the built HTML (dist/).
Usage: python3 scripts/keyword-report.py   (run after `npm run build`). Writes docs/keyword-placement-report.md"""
import os,re,html,unicodedata,collections
root='dist'
def norm(s):
    s=unicodedata.normalize('NFD',s.lower()); s=''.join(c for c in s if unicodedata.category(c)!='Mn')
    return re.sub(r'\s+',' ',re.sub(r'[^a-z0-9 ]+',' ',s)).strip()
pages={}
for d,_,fs in os.walk(root):
    for f in fs:
        if f=='index.html': pages[os.path.join(d,f)[len(root):].replace('index.html','')]=open(os.path.join(d,f)).read()
def parse(fn):
    rows={}
    for line in open('docs/'+fn):
        if not line.startswith('| /'): continue
        c=[x.strip() for x in line.strip().strip('|').split(' | ')]
        url,pk,sk=c[0],c[2],c[3]
        prim=re.split(r'\s\(',pk)[0].strip()
        if len(prim.split())>6 or 'no keyword' in pk or prim.startswith('device') or prim.startswith('French city') or '{' in prim: prim=None
        secs=[re.split(r'\s\(',x)[0].strip() for x in sk.split(';') if x.strip()]
        rows[url]=(prim,[s for s in secs if 0<len(s.split())<=5])
    return rows
maps={**parse('seo-keyword-map-en.md'),**parse('seo-keyword-map-fr.md')}
inb=collections.defaultdict(list)
for u,t in pages.items():
    body=re.sub(r'<header.*?</header>|<footer.*?</footer>','',t,flags=re.S)
    for h,txt in re.findall(r'<a [^>]*href="(/[^"#?]*)"[^>]*>(.*?)</a>',body,re.S):
        txt=html.unescape(re.sub(r'<[^>]+>','',txt)).strip()
        if h in pages and h!=u and txt: inb[h].append(txt)
def where(kw,text):
    k=norm(kw); t=norm(text)
    if k and k in t: return 'Y'
    toks=k.split()
    return 'w' if toks and all(x in t.split() for x in toks) else '-'
out=['# Keyword placement report: how each page uses its keywords\n',
'Measured from the built HTML (`dist/`) by `scripts/keyword-report.py` against the primary/secondary keywords in `seo-keyword-map-en.md` and `seo-keyword-map-fr.md`. Case and accents are ignored.\n',
'Y = exact phrase present; w = all words present in a different order or with extra words (search engines treat this as a close variant); - = absent.\n',
'**This measures on-page placement only. It cannot show rankings: the site is not live and there is no Search Console data.**\n',
'| URL | Primary keyword | Title | Meta | H1 | Intro (120 words) | In H2/H3 | Body uses (density) | In URL | Inbound anchors with keyword | Secondary found | Verdict |','|---|---|---|---|---|---|---|---|---|---|---|---|']
stats=collections.Counter(); rows=[]
for u in sorted(pages):
    if u not in maps or not maps[u][0]: continue
    prim,secs=maps[u]; t=pages[u]
    title=html.unescape(re.search(r'<title>(.*?)</title>',t,re.S).group(1)); meta=html.unescape(re.search(r'<meta name="description" content="(.*?)"',t,re.S).group(1))
    h1=html.unescape(re.sub(r'<[^>]+>','',re.search(r'<h1[^>]*>(.*?)</h1>',t,re.S).group(1)))
    main=re.search(r'<main>(.*?)</main>',t,re.S); main=main.group(1) if main else t
    main=re.sub(r'<(script|style)[^>]*>.*?</\1>','',main,flags=re.S)
    heads=[html.unescape(re.sub(r'<[^>]+>','',x)) for x in re.findall(r'<h[23][^>]*>(.*?)</h[23]>',main,re.S)]
    text=html.unescape(re.sub(r'<[^>]+>',' ',main)); words=text.split(); intro=' '.join(words[:120])
    k=norm(prim); full=norm(text)
    cnt=len(re.findall(r'(?<![a-z0-9])'+re.escape(k)+r'(?![a-z0-9])',full)); dens=100*cnt*len(k.split())/max(len(words),1)
    slug=norm(u.replace('/',' ')); inurl='Y' if k.replace(' ','') in slug.replace(' ','') else ('w' if all(x in slug.split() for x in k.split()) else '-')
    hh=sum(1 for h in heads if where(prim,h)!='-'); anc=sum(1 for a in inb[u] if where(prim,a)=='Y')
    sf=sum(1 for s in secs if where(s,text)=='Y')
    cols=[where(prim,title),where(prim,meta),where(prim,h1),where(prim,intro)]
    score=sum(1 if c=='Y' else 0.5 if c=='w' else 0 for c in cols)+(1 if hh else 0)+(1 if cnt>=2 else 0.5 if cnt==1 else 0)
    v='strong' if score>=5 else 'good' if score>=3.5 else 'partial' if score>=2 else 'weak'
    stats[v]+=1
    out.append(f'| {u} | {prim} | {cols[0]} | {cols[1]} | {cols[2]} | {cols[3]} | {hh} | {cnt} ({dens:.1f}%) | {inurl} | {anc} of {len(inb[u])} | {sf}/{len(secs)} | {v} |'); rows.append((u,v))
open('docs/keyword-placement-report.md','w').write('\n'.join(out)+'\n')
print(len(rows),dict(stats))
for u,v in rows:
    if v in('weak','partial'): print(v,u)
