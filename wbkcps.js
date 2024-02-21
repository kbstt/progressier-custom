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

function initializeBtns(){
 let btn1 = document.createElement('button');
  btn1.innerHTML = "current push status2";
  btn1.addEventListener('click', getNativePushStatus);
  document.querySelector('body').appendChild(btn1);

  let btn2 = document.createElement('button');
  btn2.innerHTML = "request permission";
  btn2.addEventListener('click', requestAppStorePermission);
  document.querySelector('body').appendChild(btn2);

  let btn3 = document.createElement('button');
  btn3.innerHTML = 'window.notification.permission-granted';
  btn3.addEventListener('click', function(){
    window.Notification = {permission: "granted"}
    alert(window.Notification);
    alert(window.Notification.permission);
  });
  document.querySelector('body').appendChild(btn3);

  let btn4 = document.createElement('button');
  btn4.innerHTML = 'progressier.push.isCompatible()';
  btn4.addEventListener('click', async function(){
    let i = await progressier.push.isCompatible();
    alert(i);
  });
  document.querySelector('body').appendChild(btn4);

 let btn5 = document.createElement('button');
  btn5.innerHTML = 'progressier.push.isSubscribed()';
  btn5.addEventListener('click', async function(){
    let i = await progressier.push.isSubscribed();
    alert(i);
  });
  document.querySelector('body').appendChild(btn5);

  let btn6 = document.createElement('button');
  btn6.innerHTML = 'progressier.push.isDenied()';
  btn6.addEventListener('click', async function(){
    let i = await progressier.push.isDenied();
    alert(i);
  });
  document.querySelector('body').appendChild(btn6);
  
}

initializeBtns();
//mapWebkitPushWithWebPush();
