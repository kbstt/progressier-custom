function correctDeveloperError(){
  if (!window.progressier || !window.progressier.add){return;}
  window.progressier.add = async function (e){
    if (e.id === "pDy0w3lGo3j9gL2zwK"){console.log("Passing pDy0w3lGo3j9gL2zwK as a userID is not allowed");return;}
    p.taskQueue.push({execution:null,data:e,status:"queued"});
    setTimeout(p.queueTasks,150)
  }
  console.log('developer error corrected');
  clearInterval(window.overwritingDeveloperError);
}

window.overwritingDeveloperError = setInterval(correctDeveloperError, 50);
correctDeveloperError();
