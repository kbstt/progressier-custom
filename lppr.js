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
     let imgNode = document.querySelector('#company_logo img');
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

  function getCompanyId(){
    try {
      let urlParam = new URL(window.location.href).searchParams.get('portal');
      if (urlParam){return urlParam;}
      let textNode = document.querySelector('#html-company-name-url-id');
      if (!textNode){return null;}
      let innerTxt = textNode.innerHTML;
      if (!innerTxt){return null;}
      let split = innerTxt.split("/");
      if (split && split[0]){return split[0];}
      return null;
    }
    catch(err){
      return null;
    }
  }
  
  function startProgressier(){
     let uid = getCompanyId();
     let customIcon = getCustomPWAIcon();
     if (!uid || !customIcon){return;}
     clearInterval(window.progressierInitializationTimer);  
     window.progressierAppRuntimeSettings = {
       startUrl: "?portal="+uid,
       uid: uid,
       icon512: customIcon
     }; 
    initProgressierScript();
  };

  window.progressierInitializationTimer = setInterval(startProgressier, 500)
 }

function saveCompanyId(){
  if (!window.progressier || !window.progressier.add){return;}
  if (!document.querySelector('body').classList.contains('progressier-standalone')){return;}
  let uid = getCompanyId();
  if (!uid){return;}
  window.progressier.add({company: uid})
  clearInterval(window.savingCompanyId);
}

if (!window.savingCompanyId){  
  window.savingCompanyId = setInterval(saveCompanyId, 1000);
}
