if (!window.progressierInitializationTimer){  
  function initProgressierScript(){
    if (document.getElementById('progressier-script-node')){return;}
    let script = document.createElement('script');
    script.setAttribute('id', 'progressier-script-node');
    script.setAttribute('src', 'https://progressier.com/client/script.js?id=jt8QWwCMIOH1fQxZu4Fy');
    document.querySelector('body').appendChild(script);
  };

  function addTrailingSlash(){
    let path  = window.location.pathname;
    let last = path[path.length -1];
    if (last === "/"){return;}
    let url = new URL(window.location.href);
    url.pathname += "/";
    window.history.replaceState({addingtrailingslash: true}, document.title, url.href);
  };
  
  function getCustomPWAIcon(){
    try {
     let imgNode = document.getElementById('002');
     if (!imgNode){return null;}
     let imgEl = (imgNode.nodeName||"").toLowerCase() === "img" ? imgNode : imgNode.querySelector('img');
     if (!imgEl){return null;}
     let imgSrc = imgEl.getAttribute('src');
     if (!imgSrc){return null;}
     if (imgSrc.includes('cloudfront.net')){
       let srcUrl = new URL(imgSrc);
       srcUrl.search = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
       return srcUrl.href
     }
     else if (imgSrc.includes('cdn.bubble.io')){
       return imgSrc.replace(/w=\d+/, 'w=512').replace(/h=\d+/, 'h=512')
     }
     else {
       return null;
     }
    }
    catch(err){
      return null;
    }
  }
  
  function getCustomPWAName(){
     let titleContent = "";
     let titleNodes = document.querySelectorAll('[id="001"]');
     titleNodes.forEach(function(a){
       let text = a.textContent;
       if (!text){return;}
       titleContent = text;
     });
     if (!titleContent){return null;}
     return (titleContent||"").trim();
  }

  function startProgressier(){
     let appName = getCustomPWAName();
     if (!appName){return;}
     addTrailingSlash();
     let currentPath = window.location.pathname.slice(1, window.location.pathname.length);
     let uid = (window.location.href.match(/(\d+x\d+)/g)||[])[0];
     if (!uid){return;}
     clearInterval(window.progressierInitializationTimer);  
     window.progressierAppRuntimeSettings = {
       startUrl: currentPath+"?unid="+uid,
       uid: uid,
       scope: currentPath,
       name: appName,
     }; 
    let customIcon = getCustomPWAIcon();
    if (customIcon){ window.progressierAppRuntimeSettings.icon512 = customIcon; }
    initProgressierScript();
  };

  window.progressierInitializationTimer = setInterval(startProgressier, 1000)
 }
