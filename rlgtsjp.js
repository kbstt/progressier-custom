function preinitializeProgressier(){
  let pathname = window.location.pathname;
  let startUrl = "";
  let customIcon = false;
  if (pathname.startsWith("/manage/agent")){
    startUrl = "manage/agent";
    customIcon = true;
  }
  else if (pathname.startsWith("/manage/admin")){
    startUrl = "manage/admin";
    customIcon = true;
  }
  window.progressierAppRuntimeSettings = {
    startUrl: startUrl,
  } 
  if (customIcon){
    window.progressierAppRuntimeSettings.icon512 = "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FiDWpnFeonBLfiQN.png?alt=media&token=7b7d4e52-4aac-46bc-bbe9-ece8bc6738f7";
  }

  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("src", "https://progressier.app/1zd2mFNRlQRP9IOZW0hI/script.js");
  document.querySelector("head").appendChild(progressierScript);
}
preinitializeProgressier();
