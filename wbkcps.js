function installedFromAppStore(){
  if (!window.webkit){return;}
  if (!window.webkit.messageHandlers){return;}
  if (!window.webkit.messageHandlers['progressier-requests-push-status']){return;}
}

function initializeAppStorePushListener(){
  window.addEventListener('progressier-apn-device-token-received', function(event) {
    let token = event.detail;
    if (!token){return;}
    progressier.add({apnDeviceToken: token});
  });
  
  window.addEventListener('progressier-push-status-updated', function(event) {
     Notification.permission = event.detail;
  });
}

function getNativePushStatus(){
  alert(progressier.detection.supportsNativeiOSPush());
  window.webkit.messageHandlers['progressier-requests-push-status'].postMessage('progressier-requests-push-status');
}

function requestAppStorePermission(){
  window.webkit.messageHandlers['progressier-prompts-push-permission'].postMessage('progressier-prompts-push-permission');
}

function mapWebkitPushWithWebPush(){
  if (!installedFromAppStore()){return;}
  initializeAppStorePushListener();
  getAppStorePushStatus();
}

function initializeBtn(){
 let btn1 = document.createElement('button');
  btn1.innerHTML = "current push status2";
  btn1.addEventListener('click', getNativePushStatus);
  document.querySelector('body').appendChild(btn1);

  let btn2 = document.createElement('button');
  btn2.innerHTML = "request permission";
  btn2.addEventListener('click', requestAppStorePermission);
  document.querySelector('body').appendChild(btn2);

  let btn3 = document.createElement('button');
  document.querySelector('body').appendChild(btn3);
  let counter = 1;
  setInterval(function(){
    counter += 1;
    btn3.innerHTML = counter;
  }, 500);
}

initializeBtn();
//mapWebkitPushWithWebPush();
