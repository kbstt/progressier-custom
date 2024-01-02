function grabColor(){
  //this gets your custom theme color from the page CSS variables
  let variableName = "--color_primary_default";
  let root = document.querySelector(':root');
  let rootStyle = getComputedStyle(root);
  let rgbValue = rootStyle.getPropertyValue(variableName);
  if (!rgbValue){return "#1c4c94";}
  let hexValue = rgbToHex(rgbValue.trim());
  return hexValue;
}

function grabName(){
  //you can customize the name of the PWA by adding a custom element in your Bubble app
  //give that element an ID set to 'custom-pwa-name' and set it HTML content to the name you want to use
  //this element doesn't exist yet, so for now the code just "EliteTrainer" as the name of the PWA
  //it's fine if the element isn't visible as long as it's in the code
  let pwaName = "EliteTrainer";
  let customNameSelector = document.getElementById('custom-pwa-name');
  if (customNameSelector){
    pwaName = customNameSelector.textContent;
  }
  return pwaName;
}

function grabIcon(){
  //you can customize the icon of the PWA by adding the icon you want to use anywhere in the body of the app (even in a hidden element)
  //let me know once it's on the page, and I'll update the code accordingly.
  return "";
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
   if (rgbValue.includes("#")){return rgbValue;}
   let rgbComponents = rgbValue.match(/\d+/g); // ['48', '97', '120']
   rgbComponents = rgbComponents.slice(0, 3);
   let hex = rgbComponents.map(function(component) {
      var hexComponent = parseInt(component, 10).toString(16);
      return hexComponent.length === 1 ? '0' + hexComponent : hexComponent;
   }).join('');
   return '#' + hex;
}

dynamicallyGenerateManifest();
