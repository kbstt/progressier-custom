function syncTagsFromPageToProgressier(){
  if (!progressier || !progressier.add){return;}
  let tags = document.getElementById('progressiertags');
  if (!tags){return;}
  let innerTxt = (tags.innerHTML ||"").split(',');
  console.log(innerTxt);
}

setInterval(syncTagsFromPageToProgressier, 1000);
