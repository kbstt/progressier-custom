if (window.location.pathname.startsWith('/dashboard')){
  window.progressierAppRuntimeSettings = {
    uid: "merchant",
    name: "Food Trucks",
   //icon512: "",
    shortName: "Food Trucks",
    scope: "dashboard/",
    startUrl: "dashboard/"
  }
}

let script = document.createElement("script");
script.setAttribute("defer", "true");
script.setAttribute("src", "https://progressier.app/ro9goR4Be1q9FdtNISf8/script.js");
document.querySelector("body").appendChild(script);

