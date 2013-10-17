chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

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
		
		$("img").addClass("hideOff-hide");
		var observer = new MutationSummary({
  					callback: imagesAdded,
  					queries: [{ element: 'img' }]
					});
	}
	}, 10);


});

function hideImage(img)
{
	var wrap = $("<div class='hideOff-cont'></div>");
	img.wrap(wrap);
	wrap.append()


}

function imagesAdded(summaries) 
{
	var images = summaries[0];

	images.added.forEach(function(newEl) 
	{
	$(newEl).addClass("hideOff-hide");
	// do setup work on new elements with data-h-tweet
	});

// images.valueChanged.forEach(function(changeEl) {
//   var oldValue = hTweetChanges.getOldAttribute(changeEl);
//   var currentValue = changeEl.getAttribute(‘data-h-tweet’);
//   // handle value changed.
// });

// images.removed.forEach(function(removedEl) {
//   // do tear-down or cleanup work for elements that had    
//   // data-h-tweet.
// });
}

