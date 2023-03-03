function conditionallyInitializeProgressier(){  
  let isAndroid = /Android/.test(window.navigator.userAgent);  
  let isIOS = [ 'iPad Simulator',  'iPhone Simulator', 'iPod Simulator',  'iPad',  'iPhone', 'iPod' ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);  
  let initializeScript = isAndroid || isIOS || window.location.pathname.startsWith('/mobile/');  
  if (initializeScript){    
    let script = document.createElement("script");    
    script.setAttribute("src", "https://progressier.com/client/script.js?id=V7BHjQq0puVIGOf3mYkQ");    
    document.querySelector('body').appendChild(script);  
  }
}

window.addEventListener('load', function () {
  conditionallyInitializeProgressier();'
});

