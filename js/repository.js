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
	var domain = 'general'; //document.domain;
    var hoStore = {

		clearBlackList : function () {
			var domain = 'general';
			localStorage.removeItem(domain);
        },

		getBlackList:function()
		{	
			

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
		{
			var items = this.getBlackList();
			if (items.indexOf(imageUrl)>=0)
			{
				items = items.replace(imageUrl,'');
				localStorage.setItem(domain, items);
			}
			
		}
    };
    window.hoStore = hoStore;

}(window));