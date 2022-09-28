function initProgressierScript(){
  let script = document.createElement('script');
  script.setAttribute('src', 'https://progressier.com/client/script.js?id=jt8QWwCMIOH1fQxZu4Fy');
  document.querySelector('body').appendChild(script);
};

function buildCustomManifest(){
 let initializing = setInterval(function(){

   let titleNode = document.getElementById('001');
   let imgNode = document.getElementById('002');
      console.log(titleNode);
   console.log(imgNode);
   if (!titleNode || !imgNode){return;}
   console.log(titleNode);
   console.log(imgNode);
   if (!imgNode.querySelector('img') || !titleNode.textContent){return;}
   clearInterval(initializing);
   let startUrl = window.location.pathname.slice(1, window.location.pathname.length);
   if (window.location.search){startUrl += window.location.search;}
   let uid = new URL(window.location.href).searchParams.get('unid');
   let obj  = {
     startUrl: startUrl,
     uid: uid,
     scope: ""
   }
   obj.name = titleNode.textContent.trim();
   let imgEl = imgNode.querySelector('img');
   if (imgEl){
     let src = imgEl.getAttribute('src') || "";
     if (src.includes("cloudfront.net")){
       let srcUrl = new URL(src);
       srcUrl.search = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
       obj.icon512 = srcUrl.href;
     }
   }
   window.progressierAppRuntimeSettings = obj;
       
  initProgressierScript()
 }, 200);
};

if (window.location.href.includes("sharacardcustomer")){
 buildCustomManifest();
}
else {
 initProgressierScript();
}
