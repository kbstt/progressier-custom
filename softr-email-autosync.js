let searchingEmail = setInterval(function(){
  if (!window.progressier || !window.progressier.add){return;}
  if (!window["logged_in_user"]){return;}
  if (!window["logged_in_user"]["softr_user_email"]){return;}
  let email = window["logged_in_user"]["softr_user_email"].trim().toLowerCase();
  window.progressier.add({email: email});
  clearInterval(searchingEmail);
}, 1500);
