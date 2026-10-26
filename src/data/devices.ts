export interface Device {
  slug: string;
  name: string;
  icon: string;
  short: string;
  players: string[];
  intro: string;
  steps: string[];
  note?: string;
  whatsappPrompt?: string;
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  tips: string[];
}

export const devices: Device[] = [
  {
    slug: 'firestick',
    name: 'Firestick / Fire TV',
    icon: 'stick',
    short: 'Install IPTV Smarters Pro or TiviMate with the Downloader app, then add your Prime IPTV login.',
    players: ['TiviMate', 'IPTV Smarters Pro'],
    intro: 'IPTV Firestick setups are one of the most popular ways to watch. Amazon Fire TV Stick and Fire TV devices are one of the most popular ways to watch Prime IPTV. IPTV Smarters Pro and TiviMate are not listed in the Amazon Appstore, so you install them with the free Downloader app. The steps below walk you through it.',
    steps: [
      'Install the free <strong>Downloader</strong> app: on the Fire TV home screen open <strong>Find → Search</strong>, search for <strong>Downloader</strong> and select <strong>Get</strong>.',
      'Allow Downloader to install apps: go to <strong>Settings → My Fire TV → Developer options</strong> and switch <strong>Install unknown apps</strong> (or <strong>Apps from Unknown Sources</strong>) <strong>on for Downloader</strong>. If you do not see Developer options, open <strong>Settings → My Fire TV → About</strong> and select your device name seven times. Menu names vary slightly by Fire OS version.',
      'Open Downloader and enter the <strong>official download link</strong> for your player (<strong>IPTV Smarters Pro</strong> or <strong>TiviMate</strong>) from that app’s official website, then download and install it. Delete the installer file afterward to save space. Only install apps from the official source.',
      'Open the player and choose <strong>Login with Xtream Codes API</strong> (or <strong>Add Playlist → Xtream Codes</strong> in TiviMate).',
      'Enter the <strong>Server URL, Username and Password</strong> from your activation email or WhatsApp message, then tap <strong>Add User</strong> / <strong>Next</strong> and wait a few seconds while channels and VOD load.',
    ],
    seoTitle: 'IPTV on Firestick: Setup Guide for Prime IPTV (2026)',
    seoDescription: 'How to set up IPTV on Firestick: install IPTV Smarters Pro or TiviMate with Downloader, add your Prime IPTV login and watch. Works on Fire TV Stick 4K.',
    h1: 'How to Set Up IPTV on Firestick (Fire TV Stick)',
    tips: [
      'A wired Ethernet adapter gives the most stable 4K streaming on Fire TV.',
      'If channels fail to load, re-check the Server URL for typos or extra spaces.',
      'If you see buffering, try a lower quality stream in the player settings.',
      'If your login is rejected, contact support on WhatsApp or by email and we will check your credentials.',
    ],
  },
  {
    slug: 'smart-tv',
    name: 'Smart TV',
    icon: 'tv',
    seoTitle: 'IPTV on Smart TV: Samsung, LG & Android Setup Guide',
    seoDescription: 'How to set up IPTV on a Smart TV (Samsung, LG and more): find a compatible player, add your Prime IPTV login or MAC address and start watching.',
    h1: 'How to Set Up IPTV on a Smart TV',
    short: 'Use IPTV Smarters Pro, IBO Player, Set IPTV, NET IPTV or any player that accepts Xtream Codes or M3U.',
    players: ['IPTV Smarters Pro', 'IBO Player', 'Set IPTV', 'NET IPTV', 'Smart IPTV', 'GSE Smart IPTV'],
    intro: 'Most modern Smart TVs can run an IPTV player straight from their app store. The exact player available depends on your TV brand and operating system.',
    steps: [
      'Open the app store on your TV (Samsung Smart Hub, LG Content Store, etc.).',
      'Search for a compatible player, for example <strong>IPTV Smarters Pro</strong>, <strong>IBO Player</strong>, <strong>Set IPTV</strong> or <strong>NET IPTV</strong>, and install it.',
      'Launch the app. In <strong>IPTV Smarters Pro</strong> choose the <strong>Xtream Codes</strong> or <strong>M3U URL</strong> login and enter your <strong>Server URL, Username and Password</strong>.',
      'For <strong>MAC-address players</strong> such as IBO Player, Set IPTV and NET IPTV, note the <strong>MAC address</strong> shown in the app and send it to us on WhatsApp. We will help you add your playlist.',
      'Confirm and wait for your channel list and VOD library to load.',
    ],
    note: 'Prime IPTV works with all players that accept Xtream Codes or an M3U link. Players that use your TV’s MAC address (IBO Player, Set IPTV, NET IPTV and similar) load the playlist against that address. Send us the MAC address on WhatsApp and we will get you set up.',
    whatsappPrompt: "Hello Prime IPTV, I use a Smart TV player and my MAC address is: ",
    tips: [
      'Connect the TV by Ethernet if you can. Smart TV Wi-Fi is often the weak link for 4K.',
      'If your TV has no suitable app, a Firestick or Android TV box is a reliable alternative.',
    ],
  },
  {
    slug: 'android-tv',
    name: 'Android TV',
    icon: 'tv-play',
    seoTitle: 'IPTV on Android TV: Setup Guide for Prime IPTV',
    seoDescription: 'How to set up IPTV on Android TV and Google TV: install TiviMate or IPTV Smarters Pro from Google Play and add your Prime IPTV login.',
    h1: 'How to Set Up IPTV on Android TV',
    short: 'Install TiviMate or IPTV Smarters Pro from Google Play on Android TV boxes.',
    players: ['TiviMate', 'IPTV Smarters Pro'],
    intro: 'Android TV, Google TV and Android set-top boxes (NVIDIA Shield, Chromecast with Google TV, Xiaomi, etc.) run the full range of IPTV players from Google Play.',
    steps: [
      'Open the <strong>Google Play Store</strong> on your Android TV or box.',
      'Search for and install <strong>TiviMate</strong> or <strong>IPTV Smarters Pro</strong>.',
      'Open the app and tap <strong>Add Playlist</strong> / <strong>Add New User</strong>.',
      'Select <strong>Xtream Codes</strong> and enter your <strong>Server URL, Username and Password</strong>.',
      'Tap <strong>Next</strong> / <strong>Add User</strong> to load your Prime IPTV subscription.',
    ],
    tips: [
      'TiviMate offers the cleanest EPG layout and channel grouping on Android TV.',
      'Enable the player’s EPG update option so the TV guide stays current.',
    ],
  },
  {
    slug: 'apple-tv',
    name: 'Apple TV',
    icon: 'box',
    seoTitle: 'IPTV on Apple TV: Setup Guide for Prime IPTV',
    seoDescription: 'How to set up IPTV on Apple TV: install IPTV Smarters or GSE Smart IPTV from the App Store and add your Prime IPTV Xtream Codes login.',
    h1: 'How to Set Up IPTV on Apple TV',
    short: 'Use IPTV Smarters or GSE Smart IPTV from the Apple TV App Store.',
    players: ['IPTV Smarters', 'GSE Smart IPTV'],
    intro: 'Apple TV supports IPTV through players available in the tvOS App Store. Setup uses the same Server URL, Username and Password you receive after activation.',
    steps: [
      'Open the <strong>App Store</strong> on your Apple TV.',
      'Search for <strong>IPTV Smarters</strong> or <strong>GSE Smart IPTV</strong> and download it.',
      'Open the app and go to <strong>Remote Playlists → Add New</strong> (or the Xtream Codes login screen).',
      'Choose <strong>Xtream Codes</strong> and enter your <strong>Server URL, Username and Password</strong>.',
      'Save the playlist and wait for the channel list to load.',
    ],
    tips: [
      'Typing long URLs is easier with the Apple TV Remote app on your iPhone as a keyboard.',
    ],
  },
  {
    slug: 'roku',
    name: 'Roku',
    icon: 'cast',
    seoTitle: 'IPTV on Roku: How to Watch Prime IPTV (Screen Mirroring)',
    seoDescription: 'How to watch IPTV on Roku: use screen mirroring from an Android phone or add a Fire TV or Android TV device. Step-by-step Prime IPTV guide.',
    h1: 'How to Watch IPTV on Roku',
    short: 'Roku options are limited, so screen mirroring or a Fire TV or Android TV box is recommended.',
    players: ['Screen mirroring', 'Compatible Roku IPTV channels'],
    intro: 'IPTV Roku setups work differently: Roku does not support the same range of IPTV players as Fire TV or Android TV. There are two practical ways to watch Prime IPTV with a Roku in the house.',
    steps: [
      'Install <strong>IPTV Smarters Pro</strong> (or another Xtream Codes player) on your Android phone or tablet and log in with your <strong>Server URL, Username and Password</strong>.',
      'On your Roku, enable <strong>Screen Mirroring</strong> under <strong>Settings → System → Screen mirroring</strong>.',
      'On your phone, start screen casting / mirroring and select your Roku device.',
      'Play any channel and it will appear on your TV through the Roku.',
    ],
    note: 'For the best picture quality and a full remote-control experience, we recommend a Firestick or Android TV box rather than relying on screen mirroring.',
    tips: [
      'Mirroring quality depends on your Wi-Fi; keep your phone and Roku on the same network.',
    ],
  },
  {
    slug: 'mobile',
    name: 'Smartphone',
    icon: 'smartphone',
    seoTitle: 'IPTV on iPhone & Android: Setup Guide for Prime IPTV',
    seoDescription: 'How to watch IPTV on iPhone and Android with IPTV Smarters Pro: install the app and add your Prime IPTV Xtream Codes login in minutes.',
    h1: 'How to Set Up IPTV on iPhone and Android',
    short: 'Watch on iPhone and Android with IPTV Smarters Pro.',
    players: ['IPTV Smarters Pro', 'GSE Smart IPTV'],
    intro: 'Take Prime IPTV anywhere. IPTV Smarters Pro is available for both iPhone and Android and handles live TV, VOD and EPG in a phone-friendly layout.',
    steps: [
      'Download <strong>IPTV Smarters Pro</strong> from the App Store (iPhone) or Google Play (Android).',
      'Open the app and tap <strong>Add New User</strong>.',
      'Select <strong>Login with Xtream Codes API</strong>.',
      'Enter your <strong>Server URL, Username and Password</strong> and tap <strong>Add User</strong>.',
    ],
    tips: [
      '4K streams use a lot of data, so use Wi-Fi when you can.',
      'Rotate your phone to landscape for full-screen viewing.',
    ],
  },
  {
    slug: 'tablet',
    name: 'Tablet',
    icon: 'tablet',
    seoTitle: 'IPTV on iPad & Android Tablet: Setup Guide',
    seoDescription: 'How to set up IPTV on an iPad or Android tablet with IPTV Smarters Pro or GSE Smart IPTV and your Prime IPTV login.',
    h1: 'How to Set Up IPTV on an iPad or Tablet',
    short: 'iPad and Android tablet setup with IPTV Smarters Pro or GSE Smart IPTV.',
    players: ['IPTV Smarters Pro', 'GSE Smart IPTV'],
    intro: 'iPads and Android tablets give you a bigger screen than a phone while staying portable. Setup is the same Xtream Codes login.',
    steps: [
      'Open the App Store (iPad) or Google Play (Android tablet).',
      'Install <strong>IPTV Smarters Pro</strong> or <strong>GSE Smart IPTV</strong>.',
      'Open the app and choose <strong>Add New User</strong> / <strong>Remote Playlists → Add New</strong>.',
      'Pick <strong>Xtream Codes</strong> and enter your <strong>Server URL, Username and Password</strong>.',
      'Save and wait for your channels to load.',
    ],
    tips: [
      'Use a stand or case for comfortable long-form viewing.',
    ],
  },
  {
    slug: 'computer',
    name: 'Computer (Windows / Mac)',
    icon: 'laptop',
    seoTitle: 'IPTV on PC & Mac: Windows and Mac Setup Guide',
    seoDescription: 'How to watch IPTV on a Windows PC or Mac with VLC or a desktop IPTV player, using your Prime IPTV Xtream Codes login or M3U link.',
    h1: 'How to Watch IPTV on PC and Mac',
    short: 'Use VLC, IPTV Smarters Pro for desktop, or another desktop IPTV player.',
    players: ['VLC Media Player', 'IPTV Smarters Pro (desktop)'],
    intro: 'On a Windows PC or Mac you can use a desktop IPTV player or a general media player such as VLC to open your Prime IPTV playlist.',
    steps: [
      'Download a desktop IPTV player such as <strong>IPTV Smarters Pro</strong> (Windows/Mac) or install <strong>VLC Media Player</strong>.',
      'In an IPTV player: choose <strong>Add User</strong> → <strong>Login with Xtream Codes API</strong> and enter your <strong>Server URL, Username and Password</strong>.',
      'In VLC: open <strong>Media → Open Network Stream</strong> and paste the <strong>M3U playlist URL</strong> provided with your activation.',
      'Wait for the channel list to load, then pick a channel to start watching.',
    ],
    tips: [
      'Ask support for an M3U link if you want to use VLC or another playlist-based player.',
    ],
  },
  {
    slug: 'mag',
    name: 'MAG Box',
    icon: 'settop',
    seoTitle: 'MAG Box IPTV Setup: Activate Prime IPTV with Your MAC',
    seoDescription: 'How to set up IPTV on a MAG box: send us your MAC address on WhatsApp, receive your portal links and enter them in the box. Step by step.',
    h1: 'How to Set Up IPTV on a MAG Box',
    short: 'Send us your MAC address on WhatsApp and we activate your box and send your portal links.',
    players: ['Built-in MAG portal'],
    intro: 'MAG box IPTV works by activation: MAG set-top boxes are activated by the box’s MAC address. You contact us on WhatsApp, send us your MAG box MAC address, and we activate your subscription and send you your portal links.',
    steps: [
      'Find the <strong>MAC address</strong> on the label on the back or bottom of your MAG box (or in its system information).',
      'Message us on <strong>WhatsApp</strong> and send us your <strong>MAG box MAC address</strong>.',
      'We <strong>activate your subscription</strong> and send you your <strong>portal links</strong>.',
      'Enter the portal link in your box’s portal settings, save, and <strong>reboot the box</strong>. Your Prime IPTV lineup loads on startup.',
    ],
    note: 'Your MAC address is how we activate your box, so send it exactly as it appears on the label.',
    whatsappPrompt: "Hello Prime IPTV, I'd like to activate my MAG box. My MAC address is: ",
    tips: [
      'Keep the box connected to your router by Ethernet for the most reliable streaming.',
    ],
  },
];

export const getDevice = (slug: string) => devices.find((d) => d.slug === slug);

export interface DeviceExtras {
  needs: string[];
  issues: [string, string][];
  sections?: { title: string; html: string }[];
  faqs?: [string, string][];
}

export const deviceExtras: Record<string, DeviceExtras> = {
  firestick: {
    needs: [
      'An Amazon Fire TV Stick or Fire TV device connected to your TV and to the internet.',
      'Your Prime IPTV login details (server URL, username and password) from your WhatsApp or email message.',
      'The free Downloader app (from the Amazon Appstore) and a player: TiviMate or IPTV Smarters Pro, installed from the player’s official website.',
      'A stable connection. An Ethernet adapter is the most reliable option for 4K.',
    ],
    issues: [
      ['Typing a long server URL with the remote is slow.', 'Use the Fire TV app on your phone as a keyboard, or copy the details from your message and paste them where the player allows it.'],
      ['I cannot find IPTV Smarters Pro or TiviMate in the Amazon Appstore.', 'That is expected, because neither app is listed there. Install the Downloader app from the Appstore and use it to install your player from its official website, as in the steps above.'],
      ['Downloader says it cannot install the app.', 'Check that Install unknown apps (or Apps from Unknown Sources) is switched on for Downloader in Developer options, and that the download link is the player’s official one.'],
      ['Streams stutter on Wi-Fi.', 'Use Ethernet if you can. Otherwise, use the HDMI extender if one came with your stick so it is not pressed against the back of the TV.'],
      ['The device runs out of storage.', 'Uninstall apps you do not use and clear the player’s cache in the Fire TV application settings.'],
    ],
    sections: [
      { title: 'Which IPTV player should you use on Firestick?', html: '<p>The two most-used players on Fire TV are <strong>TiviMate</strong> and <strong>IPTV Smarters Pro</strong>. TiviMate is popular for its TV guide layout and channel grouping; IPTV Smarters Pro is quick to set up and has clear sections for live TV, movies and series. Prime IPTV works with <strong>all players that accept Xtream Codes or an M3U link</strong>, so you can use either. For a full walk-through of the Smarters option, see <a href="/install-iptv-smarters-pro-firestick/">how to install IPTV Smarters Pro on Firestick</a>, and to compare more apps read the <a href="/blog/best-iptv-players/">IPTV player comparison</a>.</p>' },
      { title: 'Free IPTV on Firestick: try the 24-hour trial', html: '<p>Not sure IPTV will suit your Firestick and connection? Prime IPTV offers a <a href="/free-trial/">24-hour free trial</a> with no credit card, delivered by WhatsApp or email. Install your player first, request the trial, and test your channels and a live event at peak time before you choose a <a href="/pricing/">plan</a>.</p>' },
      { title: 'Fire TV Stick 4K and 4K IPTV', html: '<p>Prime IPTV streams in SD, HD, FHD and 4K where the content supports it, and all PPV channels are available in 4K and FHD. A Fire TV Stick 4K on a 4K TV with a stable connection can play 4K streams; for the best result use Ethernet and see <a href="/4k-iptv/">what you need for 4K IPTV</a>.</p>' },
    ],
    faqs: [
      ['How do I install IPTV on a Firestick?', 'Install the free Downloader app from the Amazon Appstore, use it to install a player such as IPTV Smarters Pro or TiviMate from the player’s official website, then add your Prime IPTV login using Xtream Codes. The steps above walk through it.'],
      ['What is the best IPTV player for Firestick?', 'TiviMate and IPTV Smarters Pro are the most used players on Fire TV. Prime IPTV works with all players that accept Xtream Codes or an M3U link, so you can choose the one you prefer.'],
      ['Can I get free IPTV on a Firestick?', 'Prime IPTV offers a 24-hour free trial with no credit card, delivered by WhatsApp or email, so you can test IPTV on your Firestick free before choosing a plan.'],
      ['Why is IPTV not working on my Firestick?', 'Check that your login details are correct with no extra spaces, restart the player and the Firestick, check your internet speed and try Ethernet. Our buffering and login guide has the full checklist.'],
      ['Does IPTV work on the Fire TV Stick 4K?', 'Yes. Prime IPTV streams in SD, HD, FHD and 4K where the content supports it, and a Fire TV Stick 4K can play 4K streams on a 4K TV with a stable connection.'],
    ],
  },
  'smart-tv': {
    needs: [
      'A Samsung, LG or other Smart TV with an app store and an internet connection.',
      'Your Prime IPTV login details, or your TV’s MAC address if the app activates by device.',
      'A player from your TV’s app store, for example IPTV Smarters Pro, IBO Player, Set IPTV or NET IPTV, or any player that accepts Xtream Codes or an M3U link. Availability varies by brand, region and model year.',
      'Ethernet, or a strong 5 GHz Wi-Fi signal.',
    ],
    issues: [
      ['The player I want is not in my TV’s app store.', 'Smart TV app availability differs by brand and model year. Try another listed player, or connect a Firestick or Android TV box to the same TV.'],
      ['The app shows a code or MAC address instead of a login form.', 'Some apps activate by device. Send the code or MAC address shown on screen to our support team and we will help you complete activation.'],
      ['Channels load slowly or the app feels sluggish.', 'Smart TV processors are often slower than streaming boxes. Restart the TV and close other apps. If it persists, a dedicated streaming device usually performs better.'],
      ['4K video stutters.', 'Check that the TV, the HDMI port and the player all support 4K, and use a wired connection.'],
    ],
  },
  'android-tv': {
    needs: [
      'An Android TV or Google TV device connected to the internet, such as a set-top box, an NVIDIA Shield or a Chromecast with Google TV.',
      'Your Prime IPTV login details from WhatsApp or email.',
      'TiviMate or IPTV Smarters Pro from Google Play.',
      'Ethernet is recommended for 4K.',
    ],
    issues: [
      ['The player is missing from Google Play on my box.', 'Check that the box is Google-certified and fully updated. Some uncertified Android boxes have limited Play Store access.'],
      ['The TV guide (EPG) is empty.', 'Add or refresh the EPG in the player’s settings and allow a few minutes for it to download.'],
      ['Playback stutters after a while.', 'Update the player, clear its cache and try switching hardware decoding on or off in the settings.'],
      ['The login works but categories are empty.', 'Re-add the login, make sure the server URL has no spaces, and restart the app.'],
    ],
  },
  'apple-tv': {
    needs: [
      'An Apple TV HD or Apple TV 4K running a recent tvOS version, connected to the internet.',
      'Your Prime IPTV login details from WhatsApp or email.',
      'IPTV Smarters or GSE Smart IPTV from the Apple TV App Store. Availability can change, so check the store listing.',
      'An Apple TV 4K and a 4K TV if you want 4K picture.',
    ],
    issues: [
      ['Entering credentials with the Siri Remote is slow.', 'When Apple TV offers it, use your iPhone or iPad as the keyboard to type the details.'],
      ['I cannot find the player in the App Store.', 'Search the full app name and check that your tvOS version is current and that the app is offered in your App Store region.'],
      ['The stream pauses on Wi-Fi.', 'Use Ethernet on models that have an Ethernet port, or move the Apple TV closer to your router.'],
      ['The channel list does not refresh.', 'Remove the playlist, add the login again and restart the app.'],
    ],
  },
  roku: {
    needs: [
      'A Roku player or Roku TV connected to the internet.',
      'An Android phone, tablet or Windows PC to run an IPTV player and mirror the screen, or a Fire TV or Android TV device as an alternative.',
      'Your Prime IPTV login details from WhatsApp or email.',
      'The Roku and the mirroring device on the same Wi-Fi network.',
    ],
    issues: [
      ['No IPTV player is available on my Roku.', 'Roku’s selection of IPTV players is limited. Use screen mirroring from a compatible device, or add a Fire TV or Android TV device to the same TV.'],
      ['Mirroring is laggy.', 'Mirroring depends on your Wi-Fi. Keep both devices close to the router and on the same network.'],
      ['I cannot find the screen mirroring option.', 'Support for mirroring varies by Roku model and software version. Check Settings → System on your Roku.'],
      ['Audio and video are out of sync.', 'Restart mirroring and the player. A wired connection for the mirroring device, where possible, can help.'],
    ],
  },
  mobile: {
    needs: [
      'An iPhone or Android phone running a recent operating system.',
      'Your Prime IPTV login details from WhatsApp or email.',
      'IPTV Smarters Pro (or another compatible player) from the App Store or Google Play.',
      'Wi-Fi, or a mobile data plan that can handle video.',
    ],
    issues: [
      ['Mobile data usage is high.', 'Video uses a lot of data. Use Wi-Fi when you can and choose a lower quality on mobile data.'],
      ['The video stops when I leave the app.', 'Phones can pause apps in the background. Keep the player open, or use its picture-in-picture option if it has one.'],
      ['The battery drains quickly.', 'Lower the screen brightness and the stream quality, or use your phone’s power-saving mode.'],
      ['The login fails.', 'Copy and paste the details. Phone keyboards can auto-capitalise the first letter or add a trailing space.'],
    ],
  },
  tablet: {
    needs: [
      'An iPad or Android tablet running a recent operating system.',
      'Your Prime IPTV login details from WhatsApp or email.',
      'IPTV Smarters Pro or GSE Smart IPTV from the App Store or Google Play.',
      'Wi-Fi for the most reliable streaming.',
    ],
    issues: [
      ['The player shows a stretched phone layout.', 'Some players are designed for phones. Rotate to landscape, or try another player listed in our player comparison.'],
      ['Streams buffer when the tablet is far from the router.', 'Tablets rely on Wi-Fi. Move closer to the router or use the 5 GHz network.'],
      ['The app closes when I switch to another app.', 'Keep the player in the foreground, or use picture-in-picture where the player supports it.'],
      ['The login fails.', 'Copy and paste the details and check for a leading capital letter or a trailing space.'],
    ],
  },
  computer: {
    needs: [
      'A Windows PC or Mac connected to the internet.',
      'VLC Media Player (free) or a desktop IPTV player.',
      'Your M3U playlist link for VLC (ask support if you only received Xtream Codes details), or the Xtream login for a desktop IPTV player.',
      'A wired connection if possible.',
    ],
    issues: [
      ['VLC shows a long list with no TV guide.', 'VLC plays streams but is not built around a TV guide or categories. Use a desktop IPTV player if you want EPG and an on-demand library.'],
      ['The playlist will not load.', 'Copy the whole link again and make sure it has no extra spaces or missing characters.'],
      ['Playback stutters.', 'Close heavy apps and browser tabs, use Ethernet and update VLC or your player.'],
      ['There is no sound or no picture.', 'Check the output device and try a different video output or decoder in the player settings.'],
    ],
  },
  mag: {
    needs: [
      'A MAG set-top box connected to your TV and your router.',
      'The MAC address printed on the box, which is needed for activation.',
      'The portal links we send you after you message your MAC address to us on WhatsApp.',
      'Ethernet to the router is recommended.',
    ],
    issues: [
      ['The portal does not load.', 'Confirm you sent us the correct MAC address and that the portal link was entered exactly as we sent it, then reboot the box.'],
      ['I am not sure which MAC address to use.', 'Use the address on the box’s label or in its system information. A mismatch prevents activation.'],
      ['There are no channels after rebooting.', 'Check that the box has internet access and that the portal is saved in the portal settings, then restart again.'],
      ['The picture looks wrong.', 'Check the HDMI cable and the video mode in the box settings.'],
    ],
  },
};
