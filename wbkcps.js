function dothis(){
  window.webkit.messageHandlers['push-permission-state'].postMessage('push-permission-state');
}

function initializeBtn(){
  let btn = document.createElement('button');
  btn.innerHTML = "do this3";
  btn.addEventListener('click', dothis);
  document.querySelector('body').appendChild(btn);
}

window.addEventListener('push-permission-state', function(event) {
   alert(event.detail);
});

initializeBtn();
