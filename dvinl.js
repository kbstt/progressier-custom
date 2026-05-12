if (window.location.pathname.startsWith("/publicChat")){
  let path = window.location.pathname.split("/");
  let prefix = path[1];
  let uid = path[2];
  let slug = path[3];
  let name = slug.charAt(0).toUpperCase() + slug.slice(1);
  window.progressierAppRuntimeSettings = {
    uid: uid,
    name: "DAVI - " + name,
    shortName: name,
    scope: prefix + "/"+uid+"/",
    startUrl: prefix + "/"+uid+"/"+slug
  };
  console.log(window.progressierAppRuntimeSettings);
}

const script = document.createElement("script");
script.src = "https://progressier.app/GeBtvVp5TAAGbHE3O2GE/script.js";
script.defer = true;
document.querySelector("head").appendChild(script);
