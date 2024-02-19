function dothis(){
  alert(JSON.stringify(window.webkit.messageHandlers));
  alert(window.webkit.messageHandlers.iosListener);
  window.webkit.messageHandlers['push-token'].postMessage({param1: "stuff", param2: "1000"}); 
}

function initializeBtn(){
  let btn = document.createElement('button');
  btn.innerHTML = "do this2";
  btn.addEventListener('click', dothis);
  document.querySelector('body').appendChild(btn);
}
initializeBtn();
