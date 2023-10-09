if (window.location.pathname.startsWith('/dashboard')){
  window.progressierAppRuntimeSettings = {
    uid: "merchant",
    name: "Instatruck",
    icon512: "https://firebasestorage.googleapis.com/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FFNBlhwPQgugmIVI.png?alt=media&token=776dacf0-9ea0-4ecc-9599-30547b277463",
    shortName: "Instatruck",
    scope: "dashboard/",
    startUrl: "dashboard/"
  }
}

let progressierScript = document.createElement("script");
progressierScript.setAttribute("defer", "true");
progressierScript.setAttribute("src", "https://progressier.app/ro9goR4Be1q9FdtNISf8/script.js");
document.querySelector("body").appendChild(progressierScript);

