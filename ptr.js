window.enablingPullToRefresh = setInterval(function(){
  if (!window.progressier){return;}
  if (!window.progressier.detection){return;}
  if (!window.progressier.data){return;}
  if (!window.progressier.data.params){return;}
  if (window.pullingToRefreshFn){return;}
  if (!window.progressier.data.params.pullToRefresh){clearInterval(window.enablingPullToRefresh);return;}
  if (!window.progressier.detection.isIOS()){clearInterval(window.enablingPullToRefresh);return;}
  if (!window.progressier.detection.isStandalone()){clearInterval(window.enablingPullToRefresh);return;}
  window.pullingToRefreshFn = new ProgressierPullToRefresh(progressier);  
  clearInterval(window.enablingPullToRefresh);
}, 500);
