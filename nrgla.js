let availableApps = [
    {domain: "nirogai.com" , id: "TTEy34Y2Hj3Y4iIFwIre"},
];

let currentDomain = window.location.host;
let currentApp = availableApps.find(o => o.domain === currentDomain);
if (currentApp){
   let progressierScriptUrl = "https://progressier.app/"+currentApp.id+"/script.js";
   let progressierScript = document.createElement("script");
   progressierScript.setAttribute("defer", "true");
   progressierScript.setAttribute("src", progressierScriptUrl);
   document.querySelector('html > head').appendChild(progressierScript);
}
