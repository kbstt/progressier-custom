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
  let name = customSelector && customSelector.textContent ? customSelector.textContent : "";
  return name;
}

function bubbleResizerDomain(){
  //Progressier requires exactly a 512x512px image.
  //We know Bubble has a resizing service hosted at the URL below that allows resizing images on the fly
  //However, we don't know if Bubble may change where it's hosted in the future
  //This function guesses what the domain for this is currently based on an image in the head section
  //this is safer than just hard-coding it here
  //WARNING: if Bubble changes this part of their infrastructure in the future, custom icons may break
  let knownDomain = "https://d1muf25xaso8hp.cloudfront.net";
  let linkElement = document.querySelector('link[href*="cloudfront"]');
  if (!linkElement){return knownDomain;}
  let linkElementURL = linkElement.getAttribute('href');
  if (!linkElementURL || !linkElementURL.includes("cloudfront.net")){return knownDomain;}
  try {
    let linkElementURLObj = new URL(linkElementURL);
    return linkElementURLObj.origin;
  }
  catch(err){
    return knownDomain;
  }
}

function grabIcon(){
  let customSelector = document.getElementById('custom-pwa-icon');
  let icon = customSelector && customSelector.textContent ? customSelector.textContent : "";
  if (!icon){return "";}
  if (!icon.includes("https")){
     icon = "https:"+icon;
  }
  let domain = bubbleResizerDomain();
  let properSizeQueryString = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
  let finalUrl = domain+"/"+icon+properSizeQueryString;
  return finalUrl;
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

function removeSpecialCharacters(str){
   return str.replace(/ã/g, "a")
  .replace(/à/g, "a")
  .replace(/á/g, "a")
  .replace(/â/g, "a")
  .replace(/ã/g, "a")
  .replace(/ä/g, "a")
  .replace(/è/g, "e")
  .replace(/é/g, "e")
  .replace(/ê/g, "e")
  .replace(/ë/g, "e")
  .replace(/ì/g, "i")
  .replace(/í/g, "i")
  .replace(/î/g, "i")
  .replace(/ï/g, "i")
  .replace(/ö/g, "o")
  .replace(/õ/g, "o")
  .replace(/ô/g, "o")
  .replace(/ó/g, "o")
  .replace(/ò/g, "o")
  .replace(/ü/g, "u")
  .replace(/û/g, "u")
  .replace(/ú/g, "u")
  .replace(/ù/g, "u")
  .replace(/ù/g, "u")
  .replace(/ç/g, "c")
  .replace(/ñ/g, "n")
}

function dynamicallyGenerateManifest(){
  if (window.progressierInitialized){return;}
  //the personalization isn't available on page load, so we need to wait till it's there
  if (window.location.href.includes("/student")){
    let themeColor = grabColor();
    let name = grabName();
    if (!window.progressierDataLoadingTimedout && (!name || name === "Elite Trainer")){return;}
    let icon512 = grabIcon();  
    let scope = grabScope();
    let startUrl = grabStartUrl();
    let uid = grabUid();
    if (!icon512 || !name){return; }
    
    window.progressierAppRuntimeSettings = {
        uid: uid,
        icon512: removeSpecialCharacters(icon512),
        name: removeSpecialCharacters(name),
         shortName: removeSpecialCharacters(name),
       // icon512: icon512,
        //name: name,
        //shortName: name,
        scope: scope,
        startUrl: startUrl,
        themeColor: themeColor
    }
 }
 window.progressierInitialized = true;
 initializeProgressierScript();
 clearInterval(window.progressierInitializer);
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

window.progressierInitializer = setInterval(dynamicallyGenerateManifest, 1000);
setTimeout(function(){
  window.progressierDataLoadingTimedout = true;
}, 10000);
