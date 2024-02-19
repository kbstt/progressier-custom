function dothis(){
  window.webkit.messageHandlers.doStuffMessageHandler.postMessage({param1: "stuff", param2: "1000"});
  alert(window.webkit);
}

function initializeBtn(){
  let btn = document.createElement('btn');
  btn.innerHTML = "do";
  btn.addEventListener('click' dothis);
  document.querySelector('body').appendChild(btn);
}
initializeBtn();
