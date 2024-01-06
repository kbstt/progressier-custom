function grabColor(){
  let customSelector = document.getElementById('custom-pwa-color');
  let color = customSelector && customSelector.textContent ? customSelector.textContent : "#1c4c94";
  if (color.includes("rgb")){
    color = rgbToHex(color.trim());
  }
  return color;
}

function grabName(){
  let customSelector = document.getElementById('custom-pwa-name');
  let name = customSelector && customSelector.textContent ? customSelector.textContent : "EliteTrainer";
  return name;
}

function grabIcon(){
  let customSelector = document.getElementById('custom-pwa-icon');
  let icon = customSelector && customSelector.textContent ? customSelector.textContent : "";
  if (!icon.includes("https")){
     icon = "https:"+pwaIcon;
  }
  return icon;
}

function grabScope(){
  //currently each client app is in the format https://app.elitetrainer.fit/version-test/student?pag=home
  //and each trainer dashboard is in the format https://app.elitetrainer.fit/version-test/dashboard?pag=home
  //so all client apps and trainer apps share the same scope, so the browser won't prompt you to install multiple PWAs
  //optimally, each app would be available at its own scope, e.g. https://app.elitetrainer.fit/version-test/student/customappid/?pag=home
  //see for reference: https://web.dev/articles/building-multiple-pwas-on-the-same-domain
  return "";
}

function grabUid(){
  //optimally each PWA can be identified with a unique ID
  //see for reference: https://developer.chrome.com/docs/capabilities/pwa-manifest-id
  //I couldn't find any such property in the code 
  return "custompwa";
}

function grabStartUrl(){
  let path = window.location.pathname.slice(1, window.location.pathname.length);
  let searchParams = window.location.search;
  return path+(searchParams||"");
}

function dynamicallyGenerateManifest(){
  let themeColor = grabColor();
  let name = grabName();
  let icon512 = grabIcon();  
  let scope = grabScope();
  let startUrl = grabStartUrl();
  let uid = grabUid();
  window.progressierAppRuntimeSettings = {
    uid: uid,
    icon512: icon512,
    name: name,
    shortName: name,
    scope: scope,
    startUrl: startUrl,
    themeColor: themeColor
 }
 initializeProgressierScript()
}

function initializeProgressierScript(){
  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("defer", "true");
  progressierScript.setAttribute("src", "https://progressier.app/tZlmQTR8DgpwnIUdl9aI/script.js");
  document.querySelector("body").appendChild(progressierScript);
}

function rgbToHex(rgbValue){
  try {
     if (rgbValue.includes("#")){return rgbValue;}
     let rgbComponents = rgbValue.match(/\d+/g); // ['48', '97', '120']
     rgbComponents = rgbComponents.slice(0, 3);
     let hex = rgbComponents.map(function(component) {
        var hexComponent = parseInt(component, 10).toString(16);
        return hexComponent.length === 1 ? '0' + hexComponent : hexComponent;
     }).join('');
     return '#' + hex;
  }
  catch(err){
    return "#1c4c94";
  }
}

setTimeout(dynamicallyGenerateManifest, 1500);
