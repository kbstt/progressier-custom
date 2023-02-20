if (!window.progressierCustomScriptInitialized){  
  function setDynamicManifest(){
     let path = window.location.href.replace(window.location.origin, "");
     if (!path.startsWith("/ride-with/")){return;}
     window.progressierAppRuntimeSettings = {startUrl: path.slice(1, path.length)};
  };
	
  function initProgressierScript(){
    let initiating = setInterval(function(){
      let body = document.querySelector('body');
      if (!body){return;}
      clearInterval(initiating);
      let script = document.createElement('script');
      script.setAttribute('src', 'https://progressier.com/client/script.js?id=ydUTPOlWFCjJxLmjmv0i');
      body.appendChild(script);
    }, 100); 
  };

  setDynamicManifest();
  initProgressierScript();
  window.progressierCustomScriptInitialized = true;
}
