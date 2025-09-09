async function getSquarespaceSiteId(){
	try {
		let page = await window.ExtensionScriptsSDK['1.0'].page.getDetails();
		return "sqr_"+page.website.id;
	}
	catch(err){
		return null;
	}	
};

async function initializeProgressier(){
	let appId = await getSquarespaceSiteId();
	if (!appId){console.warn("Couldn't retrieve the Squarespace site ID to initialize Progressier");return;}
	let response = await fetch("https://progressier.com/myapp/"+appId+"/get-app", {method: "GET"});
	if (response.status !== 200 && response.status !== 201){ throw "Progressier Error: We couldn't retrieve the details of this app. There may be a mistake in the URL of the script or it may have been deleted";}
	let body = await response.text();	
	let appObj = (JSON.parse(body)||{}).app;
	if (!appObj){return;}
	let isStandalone = navigator.standalone || window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: minimal-ui)').matches || window.matchMedia('(display-mode: window-controls-overlay)').matches;
	if (isStandalone){return;}
	let id = "progressier-install-icon";
	if (document.getElementById(id)){return;}
	let a = document.createElement('button');
	let color = appObj.toolboxColor || appObj.themeColor || "#ffffff";
	let appLogo = appObj.icon200 || appObj.icon520 || appObj.icon512;
	let buttonIcon = appObj.toolboxUseLogo ? appLogo : (appObj.toolboxImg || appLogo);
	a.innerHTML = `<style>#`+id+`:focus{outline:0px !important;} #`+id+`:active{transform:scale(0.85) !important;} #`+id+`:hover{transform:scale(1.1);} #`+id+`:after{display:none !important;} #`+id+`:before{content:"" !important; background-color:`+color+` !important;background-image:url(`+buttonIcon+`);box-shadow: 0 2px 9px 0 rgba(82, 79, 79, 0.15) !important; -webkit-box-shadow: 0 2px 9px 0 rgba(82, 79, 79, 0.15) !important;background-size: 100% 100% !important; position: absolute !important; width: 100% !important; height: 100% !important; background-position: center !important;overflow:hidden !important;border-radius:50% !important;}</style>`;
	a.setAttribute('aria-label', 'Install app');
	let size = 66;
	let c = "calc(50vw - "+(size/2)+"px)";
	let m = "calc(50vh - "+(size/2)+"px)";
	let p = "20px";
	let u = "unset";
	let positions = [["top-left", p, u, u, p], ["top-center", p, u, u, c], ["top-right", p, p, u, u], ["middle-left", m, u, u, p], ["middle-center", m, u, u, c], ["middle-right", m, p, u, u], ["left", u, u, p, p], ["center", u, u, p, c], ["right", u, p, p, u]];
	let position = positions.find(o => o[0] === (appObj.toolboxPosition||"right"));
	a.setAttribute('style', `width:`+size+`px !important;height:`+size+`px !important;position:fixed !important;top:`+position[1]+` !important;right:`+position[2]+` !important;bottom:`+position[3]+` !important;left:`+position[4]+` !important;z-index:2147483647 !important;border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important;outline:0px !important;border:0px !important;cursor: pointer !important; transition: all 0.3s ease-in-out !important; -webkit-transition: all 0.3s ease-in-out !important;object-fit:cover !important;box-sizing: border-box !important;`);
	a.addEventListener('click', function(){
		window.location.href ='https://install.page/platformandco';
	});
	a.setAttribute('id', id);
	document.querySelector('body').appendChild(a);	
};
if (document&&document.readyState === "complete") {
	initializeProgressier();
} 
else {
	window.addEventListener('load', initializeProgressier);
}
