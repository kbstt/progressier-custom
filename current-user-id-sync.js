let searchingCurrentUserId = setInterval(async function(){
  if (!window.progressier || !window.progressier.add){return;}
  let currentUserIdContainer = document.getElementById('current-user-id');
  if (!currentUserIdContainer){return;}
  let currentUserId = currentUserIdContainer.textContent.trim();
  if (!currentUserId){return;}
  progressier.add({id: currentUserId});
  clearInterval(searchingCurrentUserId);
}, 1500);
