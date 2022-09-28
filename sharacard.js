function initProgressierScript(){
  let script = document.createElement('script');
  script.setAttribute('src', 'https://progressier.com/client/script.js?id=jt8QWwCMIOH1fQxZu4Fy');
  document.querySelector('body').appendChild(script);
};

function buildCustomManifest(){
 let initializing = setInterval(function(){
   let titleNode =document.getElementById('001');
   let imgNode = document.getElementById('002');
   if (!titleNode || !imgNode){return;}
   clearInterval(initializing);
   let startUrl = window.location.pathname.slice(1, window.location.pathname.length);
   if (window.location.search){startUrl += window.location.search;}
   let uid = new URL(window.location.href).searchParams.get('unid')
   window.progressierAppRuntimeSettings = {
     startUrl: startUrl,
     uid: uid,
     name: titleNode.textContent.trim(),
     scope: ""
   }
  initProgressierScript()
 }, 200);
};

if (window.location.href.includes("sharacardcustomer")){
 buildCustomManifest();
}
else {
 initProgressierScript();
}


