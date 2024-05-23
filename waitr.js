if (window.location.pathname.startsWith('/dashboard')){    
    window.progressierAppRuntimeSettings = {
      uid: "admin",
     // icon512: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FbDgroEYBSpYNqNA.png?alt=media&token=d7f0036c-92ae-406c-b8ae-ff19abc03348",
      icon512: "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FvKThJhzBozIvZzJ.png?alt=media&token=f45ab2ee-3e80-41f8-81a1-0dfb78e99bf5",
      scope: "dashboard/",
      startUrl: "dashboard/",
      themeColor: "#2A2B35",
      name: "wizapt pro",
      shortName: "wizapt pro"
     }
}

let progressierScript = document.createElement('script');
progressierScript.setAttribute('src', 'https://progressier.app/fAplvAV9Zw8p7KVdgmMY/script.js');
document.querySelector('body').appendChild(progressierScript);
