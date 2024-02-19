function dothis(){
  alert(window.webkit);
  window.webkit.messageHandlers.doStuffMessageHandler.postMessage({param1: "stuff", param2: "1000"});
  
}

function initializeBtn(){
  let btn = document.createElement('button');
  btn.innerHTML = "do";
  btn.addEventListener('click', dothis);
  document.querySelector('body').appendChild(btn);
}
initializeBtn();
