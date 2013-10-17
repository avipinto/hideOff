

chrome.pageAction.onClicked.addListener(function(tab)
 {
    //Do here the action
    chrome.tabs.sendMessage(tab.id, {target: "inj", action: "paclicked"});
    
 });
    
 
chrome.runtime.onMessage.addListener(

  function(request,sender, callback) {

    if (request.target !== "bg") {
        return;
    }
    
    var tabId = sender.tab.id;
    
    if (request.showpa === true) {
        var title = "hideOff: Enable"; 
        var iconpath = "icons\\sun19g.png";
        if (request.hasHides === true) {
            iconpath = "icons\\sun19.png";
            title = "hideOff: Show All"; 
        }
        chrome.pageAction.setIcon({path: iconpath , tabId: tabId });
        chrome.pageAction.setTitle({title: title, tabId: tabId });
        chrome.pageAction.show(tabId);
    } else {
        chrome.pageAction.hide(tabId);    
    }
    callback({});
  } );
 