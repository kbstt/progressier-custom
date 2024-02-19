function pushstatus(){
  window.webkit.messageHandlers['push-permission-state'].postMessage('push-permission-state');
}

function pushrequest(){
  window.webkit.messageHandlers['push-permission-request'].postMessage('push-permission-request');
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

window.addEventListener('push-permission-state', function(event) {
   alert(event.detail);
});

 window.addEventListener('push-permission-request', function(event) {
    alert(event.detail);
});

initializeBtn();
