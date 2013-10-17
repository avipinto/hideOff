var blackList = null;

chrome.extension.sendMessage({target: "bg", showpa: false}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		blackList = window.hoStore.getBlackList();
		
		// $("img").each(function()
		// 	{
		// 		hideFromBlackList(this);
		// 	}).on("click mousedown", function(event)
		// 	{
		// 		addToHideList(this);
		// 	});
		$("img").each(function()
		{
			bindImageLink(this);
		});

		//hideFromBlackList($(newEl));
		var observer = new MutationSummary({
  					callback: imagesAdded,
  					queries: [{ element: 'img' }]
					});
	}
	}, 10);


});

function bindImageLink(imgEl)
{
	var self = imgEl;
	var img = $(imgEl);
	var parentLink = img.parent("a");
	hideFromBlackList(imgEl);
	img.add(parentLink).on("click mousedown", function(event)
	{
		addToHideList(self);
	});

}

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
	wrap.on("mouseleave",function(){$(this).find(".hideOff-show").hide()});
	show.on("click",function()
	{
		$(this).siblings("img").removeClass("hideOff-hide");
		$(this).remove();
		window.hoStore.removeFromBlackList(imgEl.src);
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
		bindImageLink(newEl)
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

chrome.runtime.onMessage.addListener(


  function(request,sender, callback) {
    
    if (request.target !== "inj") {
        return;
    }
    
    //Handle here event of page action click
    
    /*
       To enable the page action button when there are "hides" in the page call:
       
      chrome.runtime.sendMessage({target: "bg", showpa: true, hasHides: true});

       when no "hides" are in the page:
       
      chrome.runtime.sendMessage({target: "bg", showpa: true, hasHides: false});
      
    */
  });
