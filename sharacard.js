if (!window.progressierInitializationTime){  
  function initProgressierScript(){
    if (document.getElementById('progressier-script-node')){return;}
    let script = document.createElement('script');
    script.setAttribute('id', 'progressier-script-node');
    script.setAttribute('src', 'https://progressier.com/client/script.js?id=jt8QWwCMIOH1fQxZu4Fy');
    document.querySelector('body'.appendChild(script);
  };

  function addTrailingSlash(){
    let path  = window.location.pathname;
    let last = path[path.length -1];
    if (last === "/"){return;}
    let url = new URL(window.location.href);
    url.pathname += "/";
    window.history.replaceState({addingtrailingslash: true}, document.title, url.href);
  };

  function startProgressier(){
     let titleNode = document.getElementById('001');
     let imgNode = document.getElementById('002');
     if (!titleNode || !imgNode){return;}
     let imgEl = (imgNode.nodeName||"").toLowerCase() === "img" ? imgNode : imgNode.querySelector('img');
     let titleContent = titleNode.textContent;
     if (!imgEl || !titleContent){return;}
     let imgSrc = imgEl.getAttribute('src');
     if (!imgSrc){return;}
     if (!imgSrc.includes('cloudfront.net')){return;}
     clearInterval(window.progressierInitializationTimer);  
     let currentPath = window.location.pathname.slice(1, window.location.pathname.length);
     let spot = window.location.pathname.startsWith("/sharacard") ? 2 : 3;
     let uid = window.location.pathname.split("/")[spot];
     let srcUrl = new URL(imgSrc);
     srcUrl.search = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
     let icon512 = srcUrl.href;
     window.progressierAppRuntimeSettings = {
       startUrl: currentPath+"?unid="+uid,
       uid: uid,
       scope: currentPath,
       name: titleContent.trim(),
       icon512: icon512
     }; 
     console.log(window.progressierAppRuntimeSettings);
    initProgressierScript();
  };

  window.progressierInitializationTimer = setInterval(startProgressier, 1000)
 }
