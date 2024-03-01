function syncTagsFromPageToProgressier(){
  if (!progressier || !progressier.add){return;}
  let el = document.getElementById('progressiertags');
  if (!el){return;}
  let tags = (tags.textContent ||"").split(',');
  tags.forEach(function(tag, i){
    tags[i] = tag.trim();
  });
  console.log(tags);
  //progressier.add({tags: tags});
}

setInterval(syncTagsFromPageToProgressier, 1000);
