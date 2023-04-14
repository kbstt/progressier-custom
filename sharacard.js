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
     let width = imgEl.naturalWidth || imgEl.width;
     let height = imgEl.naturalHeight || imgEl.height;
     if (width !== height){return null;}
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
  
  function getCustomPWAName(){
     let titleNode = document.getElementById('001');
     if (!titleNode){return null;}
     let titleContent = titleNode.textContent;
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
