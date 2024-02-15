if (window.location.pathname.startsWith('/dashboard')){    
    window.progressierAppRuntimeSettings = {
      uid: "admin",
      icon512: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FkVcsGYLSLanrXRL.png?alt=media&token=28f4672c-19ab-4000-9e9c-8af1f6aa7bf4",
      scope: "dashboard/",
      startUrl: "dashboard/",
      themeColor: "#2A2B35",
      name: "wait-r pro",
      shortName: "wait-r pro"
     }
}

let progressierScript = document.createElement('script');
progressierScript.setAttribute('src', 'https://progressier.app/fAplvAV9Zw8p7KVdgmMY/script.js');
document.querySelector('body').appendChild(progressierScript);
