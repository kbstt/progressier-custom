function initializeProgressierScript(){
  let path = window.location.pathname.split('/');
  if (path.length < 2){return;}
  let uid = path[2];
  let startUrl = path[1] + "/"+path[2]+"/";
  let scope = startUrl;
  window.progressierAppRuntimeSettings = {
    uid: uid,
    scope: scope,
    startUrl: startUrl,
  };
  console.log(window.progressierAppRuntimeSettings);
  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("defer", "true");
  progressierScript.setAttribute("src", "https://progressier.app/VfJEj8QzOazXFT0tk5uU/script.js");
  document.querySelector("body").appendChild(progressierScript);
}

initializeProgressierScript();
