# 📱⭐️ Unofficial WebViewGold SDK

a modular package to handle WVG APIs

```
IMPORTANT: this module only works in Browsers
```

# Install

if you are using Yarn:

```sh
yarn add webviewgold-sdk
```

if you are using NPM:

```sh
npm i webviewgold-sdk
```

# Usage

```js
const wbg = require("webviewgold-sdk");

const uuid = wbg.getUUID();
console.log(uuid); // B79736F6-8D05-40AF-A20E-886F435551C1
```

# Implemented APIs

- [x] Reset App API
- [x] QR Code Scanner API
- [x] HTML5 Geolocation API
- [x] Push Notifications API via OneSignal, Firebase, and JavaScript
- [x] UUID API
- [x] Dynamic Status Bar API
- [x] App Version Check API
- [x] Reset App API
- [x] Take Screenshot API
- [x] Spinner
- [x] Share
- [ ] iCal Calendar API
- [ ] Image, Music, And File Downloader API
- [ ] Downloader for PDF, ePub, Wallet, Documents, and Music Files
- [ ] NFC Plugin
