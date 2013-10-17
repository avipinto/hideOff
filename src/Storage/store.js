jQuery(document).ready(function()
{
	//alert('ffff');
	//document.
	//addToWhiteList("porn.png");
	//addToWhiteList("donky.png");
	//getWhiteList();	
	//chrome.storage.local.set({'value': 'theValue'}, function() {
    //// Notify that we saved.
    //	alert('Settings saved');
  	//});

  	//chrome.storage.local.get(function(data) {
    //// Notify that we saved.
    //	alert(data.value);
  	//});

});

function addToWhiteList(imageUrl)
{
	var domain = 'dummy.com';
	chrome.storage.local.set({'domain': domain, 'urls':[imageUrl]}, function() {
    	// Notify that we saved.
    	//alert('Settings saved');
  	});
}

function getWhiteList()
{
	alert('here');
	chrome.storage.local.get(function(data) {
		alert('domain:' + data.domain);
		alert('domain:' + data.urls[0]);
  	});
}

function removeFromWhiteList(imageUrl)
{
	domain = 'dummy.com';
	chrome.storage.local.get('1',function(data) {
    	// Notify that we saved.
    	alert(data.url);
  	});
}