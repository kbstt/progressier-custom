if (window.location.pathname.startsWith('/dashboard')){    
    window.progressierAppRuntimeSettings = {
      uid: "admin",
      icon512: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FckpBwxZjZxEXInh.png?alt=media&token=e533479d-f330-47f2-8ef9-669d632bf2ab",
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
