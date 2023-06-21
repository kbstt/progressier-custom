let teamTimer = setInterval(function(){ 
  let teamElement = document.querySelector('#current-user-team'); 
  if (!teamElement){return;} 
  let teamValue = teamElement.textContent; 
  if (!teamValue){return;} 
  if (!window.progressier || !window.progressier.add){return;} 
  progressier.add({tags: teamValue}); 
  clearInterval(teamTimer);
}, 1000);
