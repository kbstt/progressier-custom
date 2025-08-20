setInterval(function(){
  let badge = document.querySelector('a[href^="https://progressier.com?poweredby=true"]');
  if (badge){return;}
  badge.setAttribute('href', 'javascript:void(0)');
  badge.setAttribute('target', '_self');
}, 200);
