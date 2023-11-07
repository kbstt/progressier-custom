if (!window.progressierInitializationTimer){  
  function initProgressierScript(){
    if (document.getElementById('progressier-script-node')){return;}
    let script = document.createElement('script');
    script.setAttribute('id', 'progressier-script-node');
    script.setAttribute('src', 'https://progressier.app/XdbVhITe2FcioqB32F1E/script.js');
    document.querySelector('body').appendChild(script);
  };
  
  function getCustomPWAIcon(){
    try {
     let imgNode = document.querySelector('img[src*="?w=128&h=&auto=compress&dpr=2&fit=max"]');
     if (!imgNode){return null;}
     let imgEl = (imgNode.nodeName||"").toLowerCase() === "img" ? imgNode : imgNode.querySelector('img');
     if (!imgEl){return null;}
     let imgSrc = imgEl.getAttribute('src');
     if (!imgSrc){return null;}
     if (!imgSrc.includes('cloudfront.net')){return null;}
     let srcUrl = new URL(imgSrc);
     srcUrl.search = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
     return srcUrl.href;
    }
    catch(err){
      return null;
    }
  }
  
  function startProgressier(){
     let uid = new URL(window.location.href).searchParams.get('portal');
     let customIcon = getCustomPWAIcon();
     if (!uid || !customIcon){return;}
     clearInterval(window.progressierInitializationTimer);  
     window.progressierAppRuntimeSettings = {
       startUrl: window.location.origin+"?portal="+uid,
       uid: uid,
       icon512: customIcon
     }; 
    initProgressierScript();
  };

  window.progressierInitializationTimer = setInterval(startProgressier, 500)
 }

function saveAppSubId(){
  if (!window.progressier || !window.progressier.add){return;}
  let uid = new URL(window.location.href).searchParams.get('portal');
  //window.progressier.add({company: uid})
  clearInterval(window.savingAppSubId);
}

window.savingAppSubId = setInterval(saveAppSubId, 1000);
