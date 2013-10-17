// jQuery(document).ready(function()
// {
// 	//alert('ffff');
// 	//debugger;
// 	window.hoStore.clearBlackList();
// 	window.hoStore.getBlackList();
// 	window.hoStore.addToBlackList('someimage.png');
// 	var u = window.hoStore.getBlackList();	
// 	alert(u);

// });

(function (window) {

    "use strict";

    var hoStore = {

		clearBlackList : function () {
			var domain = 'general';
			localStorage.removeItem(domain);
        },

		getBlackList:function()
		{	
			var domain = 'general'; //document.domain;

			var val = localStorage.getItem(domain) || '';
			//alert('got:' + val + ' from ' + domain);
		  	return val;
		},

		addToBlackList:function(imageUrl)
		{
			var domain = 'general'; //document.domain;
			var items = this.getBlackList();
			if (items.indexOf(imageUrl)<0)
				items = items + ' ' + imageUrl;
			
			//alert('insert:' + imageUrl + ' under ' + domain);
			localStorage.setItem(domain, items);
		},


		removeFromBlackList:function(imageUrl)	
		{//depricated
			domain = document.domain;
			chrome.storage.local.get('1',function(data) {
		    	// Notify that we saved.
		    	//	(data.url);
		  	});
		}
    };
    window.hoStore = hoStore;

}(window));