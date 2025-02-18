//each app should have a name (up to 12 characters), a domain, and an icon (512x512 PNG)
let apps = [
 {
     name: "MyWineKaki",
     domain: "mywinekaki.uplay.sg",
     icon: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/RRhO9piM8sDKSDZogf9D%2FdRiDHaphrsFyHwj.png?alt=media&token=d97f9350-68fe-4609-87eb-7bef1a50f313"
   },
 {
     name: "SMRT UPlay",
     domain: "smrt.uplay.sg",
     icon: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FtQtHgqREcZYCaEG.png?alt=media&token=7a41b5c4-7139-45be-9fb8-017c6ebeac2b"
   }
];

let currentDomain = window.location.host;
let currentApp = apps.find(o => o.domain === currentDomain);
if (currentApp){
  window.progressierAppRuntimeSettings = {
    uid: currentApp.domain.split(".")[0],
    icon512: currentApp.icon,
    name: currentApp.name,
    shortName: currentApp.name,
  };
}
