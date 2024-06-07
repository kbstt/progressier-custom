function preinitializeProgressier(){
  let pathname = window.location.pathname;
  let startUrl = "";
  if (pathname.startsWith("/manage/agent")){
    startUrl = "manage/agent";
  }
  else if (pathname.startsWith("/manage/admin")){
    startUrl = "manage/admin";
  }
  window.progressierAppRuntimeSettings = {
    startUrl: startUrl,
  } 
  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("src", "https://progressier.app/1zd2mFNRlQRP9IOZW0hI/script.js");
  document.querySelector("head").appendChild(progressierScript);
}
preinitializeProgressier();
