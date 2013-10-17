var blackList = null;

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		blackList = window.hoStore.getBlackList();
		
		$("img").each(function()
			{
				hideFromBlackList(this);
			}).on("click mousedown", function(event)
			{
				addToHideList(this);
			});
		//hideFromBlackList($(newEl));
		var observer = new MutationSummary({
  					callback: imagesAdded,
  					queries: [{ element: 'img' }]
					});
	}
	}, 10);


});

function addToHideList(imgEl)
{
	window.hoStore.addToBlackList(imgEl.src);
	window.setTimeout(function()
	{
		hideImge(imgEl);
		// $("img[src='"+ imgEl.src +"']").each(function(){
		// 	hideImge(this);
		// });
	},2000)
	
} 

function hideFromBlackList(imgEl)
{
	if(blackList.indexOf(imgEl.src) == -1)
	{
		return;
	}
	hideImge(imgEl);	
}

function hideImge(imgEl)
{

	img = $(imgEl);
	if(img.hasClass("hideOff-hide")){return;}

	var wrap = $("<div class='hideOff-cont'></div>");
	var show = $("<div class='hideOff-show' title='Show Again'></div>");
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
		hideFromBlackList(newEl);
		$(newEl).on("click mousedown", function(event)
			{
				addToHideList(this);
			});
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

