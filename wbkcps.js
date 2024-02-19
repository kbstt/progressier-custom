function dothis(){
  window.webkit.messageHandlers['print'].postMessage({param1: "stuff", param2: "1000"}); 
}

function initializeBtn(){
  let btn = document.createElement('button');
  btn.innerHTML = "do this3";
  btn.addEventListener('click', dothis);
  document.querySelector('body').appendChild(btn);
}
initializeBtn();
