let appId = "DF8SWpIBmfPIqislXg6Q";
if (window.location.host === "firmus-support.app"){    
 appId = "ITmphpdh62Rbv83wP8Fp"
}
else if (window.location.host === "wunse.app"){
  appId = "DF8SWpIBmfPIqislXg6Q"
}

let pgs = document.createElement("script");
pgs.setAttribute("defer", "true");
pgs.setAttribute("src", "https://progressier.app/"+appId+"/script.js");
document.querySelector("head").appendChild(pgs);
