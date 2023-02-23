function notificationsHaveBeenGranted(){
  if (!window.Notification){return false;}              
  if (!Notification.permission){return false;}       
  if (Notification.permission !== "granted"){return false;}      
  return true;    
}

function autoSwapButtons(){     
  let granted = notificationsHaveBeenGranted();  
  let subscribeBtn = document.querySelector('.progressier-subscribe-button');  
  let followBtn = document.querySelector('#fb-subscribe-btn');  
  //you may need to adjust the method for hiding both buttons
  //e.g. adding/removing a class that hides the element
  if (granted){   
    if (subscribeBtn){ subscribeBtn.style.display = "none"; }      
    if (followBtn){ followBtn.style.display = "block"; }  
  }  
  else { 
    if (subscribeBtn){ subscribeBtn.style.display = "block";}           
    if (followBtn){ followBtn.style.display = "none"; }   
  }
}

setInterval(autoSwapButtons, 200);
