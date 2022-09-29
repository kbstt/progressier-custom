function initProgressierScript(){
  let script = document.createElement('script');
  script.setAttribute('src', 'https://progressier.com/client/script.js?id=jt8QWwCMIOH1fQxZu4Fy');
  let initiating = setInterval(function(){
    let body = document.querySelector('body');
    if (!body){return;}
    clearInterval(initiating);
    body.appendChild(script);
  }, 100); 
};

function buildCustomManifest(){
 let initializing = setInterval(function(){
   let titleNode = document.getElementById('001');
   let imgNode = document.getElementById('002');
   if (!titleNode || !imgNode){return;}
   let imgEl = imgNode.querySelector('img');
   let titleContent = titleNode.textContent;
   if (!imgEl || !titleContent){return;}
   let imgSrc = imgEl.getAttribute('src');
   if (!imgSrc){return;}
   if (!imgSrc.includes('cloudfront.net')){return;}
   clearInterval(initializing);
   let startUrl = window.location.pathname.slice(1, window.location.pathname.length);
   if (window.location.search){startUrl += window.location.search;}
   let uid = new URL(window.location.href).searchParams.get('unid');
   let srcUrl = new URL(imgSrc);
   srcUrl.search = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
   let icon512 = srcUrl.href;
   window.progressierAppRuntimeSettings = {
     startUrl: startUrl,
     uid: uid,
     scope: "",
     name: titleContent.trim(),
     icon512: icon512
   }; 
  initProgressierScript();
 }, 200);
};

if (window.location.href.includes("sharacardcustomer")){
 buildCustomManifest();
}
else {
 initProgressierScript();
}
