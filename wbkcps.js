function pushstatus(){
  window.webkit.messageHandlers['progressier-requests-push-status'].postMessage('progressier-requests-push-status');
}

function pushrequest(){
  window.webkit.messageHandlers['progressier-prompts-push-permission'].postMessage('progressier-prompts-push-permission');
}

function initializeBtn(){
  let btn1 = document.createElement('button');
  btn1.innerHTML = "current push status";
  btn1.addEventListener('click', pushstatus);
  document.querySelector('body').appendChild(btn1);

  let btn2 = document.createElement('button');
  btn2.innerHTML = "request permission";
  btn2.addEventListener('click', pushrequest);
  document.querySelector('body').appendChild(btn2);
}

window.addEventListener('progressier-apn-device-token-received', function(event) {
  let token = event.detail;
  alert(token);
  if (token){ progressier.add({apnDeviceToken: token}); }
});

window.addEventListener('progressier-push-status-received', function(event) {
   alert(event.detail);
});

initializeBtn();
