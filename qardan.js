//below you can map a jotform app id with a custom slug to use prettier URLs. Examples:
//going to qardan.installable.app/example1 will open https://www.jotform.com/edit/5436412498932914150
//going to qardan.installable.app/example2 will open https://www.jotform.com/edit/5436412498932914151
//this is optional, so you can also directly go to qardan.installable.app/5436412498932914150 or qardan.installable.app/5436412498932914151

window.appSlugMappings = [
  {app: "5436412498932914150", slug: "example1"},
  {app: "5436412498932914151", slug: "example2"},
];

window.jotFormBaseUrl = "https://www.jotform.com/edit/";

if (!window.progressierCustomScriptInitialized){  
  function mapSlug(slug){
    if (!slug){return window.appSlugMappings[0].app;}
    let match = (window.appSlugMappings||[]).find(o => o.slug === slug);
    if (!match){return slug;}
    return match.app;
  }
  
  function addIframe(){
    let slug = window.location.pathname.split("/")[1];
    let appId = mapSlug(slug);
    let url = window.jotFormBaseUrl+appId;
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
