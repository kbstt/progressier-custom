if (window.location.href.includes("sharacardcustomer")){
 let startUrl = window.location.pathname.slice(1, window.location.pathname.length);
 if (window.location.search){startUrl += window.location.search;}
 let uid = new URL(window.location.href).searchParams.get('unid')
 window.progressierAppRuntimeSettings = {
   startUrl: startUrl,
   uid: uid,
   scope: ""
 }
}

let script = document.createElement('script');
script.setAttribute('src', 'https://progressier.com/client/script.js?id=jt8QWwCMIOH1fQxZu4Fy');
document.querySelector('body').appendChild(script);
