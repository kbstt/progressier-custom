function grabName(){
  let node = document.querySelector('head > title');
  let content = (node && node.innerHTML) ? node.innerHTML : "";
  if (content.includes("Unlock The Power")){return "";}
  return content.trim();
}

function grabIcon(){
  try {
    let favicon = document.querySelector('head link[rel="icon"]');
    let src = favicon.getAttribute("href");
    let resizedQueryString = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
    let finalUrl = "https://d1muf25xaso8hp.cloudfront.net/https://"+src+ resizedQueryString;
    return new URL(finalUrl);
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
