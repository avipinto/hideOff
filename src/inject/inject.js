chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		 jQuery(document).on("load","img",function(event)
		 	{
		 		//this.src = "";
		 		$(this).css("opacity","0.2");
		 	});
		 
		 // jQuery(document).on("mousedown","img",function(event)
		 // 	{
		 // 		//this.src = "";
		 // 		$(this).css("opacity","0.2");
		 // 	});

		 // jQuery(document).on("mouseenter mousemove","img",function(event)
		 // 	{
		 // 		//this.src = "";
		 // 		$(this).css("opacity","0.2");
		 // 	});
		//$("img").on("mouseenter",function(event){this.src = "";});
		$("img").css("opacity","0.2");
	}
	}, 10);


});


