jQuery(document).ready(function()
{
	//alert('ffff');
	debugger;
	window.hoStore.clearWhiteList();
	window.hoStore.getWhiteList();
	window.hoStore.addToWhiteList('someimage.png');
	var u = window.hoStore.getWhiteList();	
	alert(u);

});

(function (window) {

    "use strict";

    var hoStore = {

		clearWhiteList : function () {
			var domain = 'general';
			localStorage.removeItem(domain);
        },

		getWhiteList:function()
		{	
			var domain = 'general'; //document.domain;

			var val = localStorage.getItem(domain) || '';
			alert('got:' + val + ' from ' + domain);
		  	return val;
		},

		addToWhiteList:function(imageUrl)
		{
			var domain = 'general'; //document.domain;
			var items = this.getWhiteList();
			if (items.indexOf(imageUrl)<0)
				items = items + ' ' + imageUrl;
			
			alert('insert:' + imageUrl + ' under ' + domain);
			localStorage.setItem(domain, items);
		},


		removeFromWhiteList:function(imageUrl)	
		{//depricated
			domain = document.domain;
			chrome.storage.local.get('1',function(data) {
		    	// Notify that we saved.
		    	alert(data.url);
		  	});
		}
    };
    window.hoStore = hoStore;

}(window));