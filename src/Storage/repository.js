jQuery(document).ready(function()
{
	//alert('ffff');
	addToWhiteList("porn.png");
	//addToWhiteList("donky.png");
	var u = getWhiteList();	
	alert(u.images);

});

function addToWhiteList(imageUrl)
{
	var domain = document.domain;

	store.set(domain, {images:imageUrl});

	//chrome.storage.local.set({'domain': domain, 'urls':[imageUrl]}, function() {
    	// Notify that we saved.
    	//alert('Settings saved');
  	//});
}

function getWhiteList()
{	
	var item = store.get(document.domain);
	return item;
	//var urls;
	//var all = chrome.storage.local.get();//function(data) {
		// if (data.domain == document.domain)
		// {
		// 	alert('found it ' + data.urls[0]);
		// 	return data.urls;
		// 	//urls = data.urls;			
		// }
  	//});
	//return all[0];
  	//return urls;
}

function removeFromWhiteList(imageUrl)
{
	domain = document.domain;
	chrome.storage.local.get('1',function(data) {
    	// Notify that we saved.
    	alert(data.url);
  	});
}