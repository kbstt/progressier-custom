function grabName(){
  let node = document.querySelector('head > title');
  let content = (node && node.innerHTML) ? node.innerHTML : "";
  if (content.includes("Unlock The Power")){return "";}
  return content.trim();
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
  try {
    let favicon = document.querySelector('head link[rel="icon"]');
    let src = favicon.getAttribute("href");
    let cdnDomain = bubbleResizerDomain();
    let resizedQueryString = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
    let finalUrl = cdnDomain+"/https:"+ src + resizedQueryString;
    return new URL(finalUrl).href;
  }
  catch(err){
    return null;
  }
};

function dynamicallyGenerateManifest(){
  if (window.progressierInitialized){return;}
  //the personalization isn't available on page load, so we need to wait till it's there
  if (window.location.href.includes("/login")){return;}
  let name = grabName();
  let icon512 = grabIcon();  
  let uid = name.toLowerCase();
  if (!icon512 || !name){return; }
    
  window.progressierAppRuntimeSettings = {  uid: uid, icon512: icon512, name: name, shortName: name};
  window.progressierInitialized = true;
  initializeProgressierScript();
  clearInterval(window.progressierInitializer);
}

function initializeProgressierScript(){
  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("defer", "true");
  progressierScript.setAttribute("src", "https://progressier.app/1w6TFfJnhVvrbR7uZzAP/script.js");
  document.querySelector("body").appendChild(progressierScript);
}

window.progressierInitializer = setInterval(dynamicallyGenerateManifest, 1000);
setTimeout(function(){
  window.progressierDataLoadingTimedout = true;
}, 10000);
