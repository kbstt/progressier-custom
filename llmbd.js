if (!window.progressierInitializationTimer){  
  function initProgressierScript(){
    if (document.getElementById('progressier-script-node')){return;}
    let script = document.createElement('script');
    script.setAttribute('id', 'progressier-script-node');
    script.setAttribute('src', 'https://progressier.app/NEVCJyUNI1rzZnqYjuF9/script.js');
    document.querySelector('body').appendChild(script);
  };
  
  function getCustomPWAIcon(){
    try {
      //we get the images that's closest to the top left corner
      let images = document.querySelectorAll('img');
      let closestToTopLeft = null;
      let currentPosition = Infinity;
      images.forEach(function(img){
         let offsetLeft = img.offsetLeft;
         let offsetTop = img.offsetTop;
         if (offsetLeft + offsetTop < currentPosition){
            closestToTopLeft = img;
            currentPosition = offsetLeft + offsetTop;
         }
      });
      //we replace the cloudfront query string so that the icon uses the right format (512x512px)
      let src = closestToTopLeft.getAttribute('src');
      let srcUrl = new URL(src);
      srcUrl.search = "?w=512&h=512&fit=crop&auto=compress&dpr=1";
      return srcUrl.href;
    }
    catch(err){
      return null;
    }
  }
  
  function startProgressier(){
     let uid = window.location.host.replace(/[.]/g, "");
     let name = document.querySelector('head title').innerText;
     let icon = getCustomPWAIcon();
     if (!icon){return;}
     clearInterval(window.progressierInitializationTimer);  
     window.progressierAppRuntimeSettings = {
       uid: uid,
       startUrl: "?homescreen=true",
       icon512: icon,
       name: name,
     }; 
    initProgressierScript();
  };

  window.progressierInitializationTimer = setInterval(startProgressier, 1000)
}
