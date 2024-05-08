let searchingCurrentUserTags = setInterval(async function(){
  if (!window.progressier || !window.progressier.add){return;}
  let currentUserTagContainer = document.getElementById('current-user-progressier-tags');
  if (!currentUserTagContainer){return;}
  let currentUserTags = currentUserTagContainer.textContent;
  if (!currentUserTags || window.currentUserTags === currentUserTags){return;}
  window.currentUserTags = currentUserTags;
  console.log(currentUserTags);
  let tagSplit = window.currentUserTags.split(',');
  let finalTags = [];
  tagSplit.forEach(function(tag){
    let t = tag.trim();
    finalTags.push(t);
  });
  console.log(finalTags);
  progressier.add({tags: finalTags});
}, 1500);
