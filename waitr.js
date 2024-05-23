if (window.location.pathname.startsWith('/dashboard')){    
    window.progressierAppRuntimeSettings = {
      uid: "admin",
      icon512:"https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FMuQKbageMeGKRpM.png?alt=media&token=75d5ee12-964e-4087-b0fe-6b0cfa77b77c",
      scope: "dashboard/",
      startUrl: "dashboard/",
      themeColor: "#2A2B35",
      name: "wizapt pro",
      shortName: "wizapt pro"
     }
}

let progressierScript = document.createElement('script');
progressierScript.setAttribute('src', 'https://progressier.app/EhmBUzDlLqGIovKO8jG1/script.js');
document.querySelector('body').appendChild(progressierScript);
