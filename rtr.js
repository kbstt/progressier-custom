function syncTagsFromPageToProgressier(){
  if (!progressier || !progressier.add){return;}
  let el = document.getElementById('progressiertags');
  if (!el){return;}
  let tags = (tags.textContent ||"").split(',');
  tags.forEach(function(tag, i){
    tags[i] = tag.trim();
  });
  console.log('tags retrieved from page':);
  console.log(tags);
  progressier.add({tags: tags});
  clearInterval(retrievingTags);
}

let retrievingTags = setInterval(syncTagsFromPageToProgressier, 1000);
