let searchingCurrentUserTags = setInterval(async function(){
  if (!window.progressier || !window.progressier.add){return;}
  let currentUserTagContainer = document.getElementById('current-user-tags');
  if (!currentUserIdContainer){return;}
  let currentUserTags = currentUserTagContainer.textContent;
  if (!currentUserTags){return;}
  let tagSplit = currentUserTags.split(',');
  let finalTags = [];
  tagSplit.forEach(function(tag){
    let t = tag.trim();
    finalTags.push(t);
  });
  progressier.add({tags: finalTags});
}, 1500);
