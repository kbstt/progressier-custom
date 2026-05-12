//1- Retrieve the custom privateChat URL and name
//and save this data in a global variable.
//if we're not on a publicChat URL, we use the 
//static Start URL and name defined in the Progressier dashboard
if (window.location.pathname.startsWith("/publicChat")){
  let path = window.location.pathname.split("/");
  let prefix = path[1];
  let uid = path[2];
  let slug = path[3];
  let name = slug.charAt(0).toUpperCase() + slug.slice(1);
  window.progressierAppRuntimeSettings = {
    uid: uid,
    name: "DAVI - " + name,
    shortName: name,
    scope: prefix + "/"+uid+"/",
    startUrl: prefix + "/"+uid+"/"+slug
  };
  console.log(window.progressierAppRuntimeSettings);
}

//2- Initialize the Progressier script, which will in turn
//generate the manifest dynamically with the data above
const script = document.createElement("script");
script.src = "https://progressier.app/GeBtvVp5TAAGbHE3O2GE/script.js";
script.defer = true;
document.querySelector("head").appendChild(script);

/*Note: the present script should replace the following snippet in your code:

<link rel="manifest" href="https://progressier.app/GeBtvVp5TAAGbHE3O2GE/progressier.json"/>
<script defer src="https://progressier.app/GeBtvVp5TAAGbHE3O2GE/script.js"></script> 

It's important to replace BOTH the script AND the manifest.
*/
