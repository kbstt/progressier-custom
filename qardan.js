window.nameIdMappings = [
  {app: "5436412498932914150", slug: "qardan"},
];

if (!window.progressierCustomScriptInitialized){  
  function getMapping(slug){
    let options = window.nameIdMappings;
    let match = options.find(o => o.slug === slug);
    if (!match){return slug;}
    return match.app;
  }
  
  function addIframe(){
    let slug = window.location.pathname.split("/")[1];
    let appId = getMapping(slug);
    let url = "https://www.jotform.com/app/"+appId;
    let initiating = setInterval(function(){
      let body = document.querySelector('body');
      if (!body){return;}
      clearInterval(initiating);
      let iframe = document.createElement('iframe');
			iframe.setAttribute('src', url);
			document.querySelector('body').appendChild(iframe);
    }, 100); 
  };

  function addTrailingSlash(){
    let path  = window.location.pathname;
    let last = path[path.length -1];
    if (last === "/"){return;}
    let url = new URL(window.location.href);
    url.pathname += "/";
    window.history.replaceState({addingtrailingslash: true}, document.title, url.href);
  }

  function setDynamicManifest(){
     let url = window.location.href;
     window.progressierAppRuntimeSettings = {
       startUrl: url,
       scope: url
     }; 
  };
  
  addTrailingSlash();
  setDynamicManifest();
  addIframe();
  window.progressierCustomScriptInitialized = true;
}
