

chrome.pageAction.onClicked.addListener(function(tab)
 {
    //Do here the action
 });
    
 
chrome.runtime.onMessage.addListener(

  function(request,sender) {
    chrome.pageAction.show(sender.tab.id);
  
  } );
 