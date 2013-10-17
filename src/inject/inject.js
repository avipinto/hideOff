chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		 // jQuery(document).on("mousedown","img",function(event)
		 // 	{
		 // 		//this.src = "";
		 // 		$(this).css("opacity","0.2");
		 // 	});

		 // jQuery(document).on("mouseenter mousemove",".hideOff-cont",function(event)
		 // 	{
		 // 		//this.src = "";
		 // 		$(this).find(".hideOff-show").show();
		 // 	});
		//$("img").on("mouseenter",function(event){this.src = "";});
		
		//  jQuery(document).on("click",".hideOff-show",function(event)
		// {
		// 	//this.src = "";
		// 	alert("ddd");
		// 	return false;
		// });

		//$("img").addClass("hideOff-hide");
		$("img").each(function()
			{
				hideImage(this);
			});
		//hideImage($(newEl));
		var observer = new MutationSummary({
  					callback: imagesAdded,
  					queries: [{ element: 'img' }]
					});
	}
	}, 10);


});

function hideImage(imgEl)
{
	img = $(imgEl);
	var wrap = $("<div class='hideOff-cont'></div>");
	var show = $("<div class='hideOff-show' title='Show Again'>^</div>");
	wrap.on("mouseenter",function(){$(this).find(".hideOff-show").show()});
	show.on("click",function()
	{
		$(this).siblings("img").removeClass("hideOff-hide");
		$(this).remove();
		return false;
	});
	wrap.width(img.width());
	wrap.height(img.height());
	img.wrap(wrap);
	img.after(show);
	img.addClass("hideOff-hide");


}

function imagesAdded(summaries) 
{
	var images = summaries[0];

	images.added.forEach(function(newEl) 
	{
		//$(newEl).addClass("hideOff-hide");
		hideImage(newEl);
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

