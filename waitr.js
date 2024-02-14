if (window.location.pathname.startsWith('/dashboard')){    
    window.progressierAppRuntimeSettings = {
      uid: "admin",
      icon512: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FmFfWkJpgHdmsqlR.png?alt=media&token=2a76013d-b788-424d-85f9-bdfcb685ae98" ,
      scope: "dashboard/",
      startUrl: "dashboard/",
      themeColor: "#000000"
     }
}

let progressierScript = document.createElement('script');
progressierScript.setAttribute('src', 'https://progressier.app/fAplvAV9Zw8p7KVdgmMY/script.js');
document.querySelector('body').appendChild(progressierScript);
