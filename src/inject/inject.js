var blackList = null;

chrome.extension.sendMessage({target: "first", showpa: false, hasHides: false}, function(response) {
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
	if(img.hasClass("hideOff-removedFromBlack")){return;}
	var parentLink = img.parent("a");
	hideFromBlackList(imgEl);
	
//TODO - i think the following should be in hideFromBlackList
	img.add(parentLink).on("click.hideOff mousedown.hideOff", function(event)
	{
		addToHideList(self);
	});

}

function addToHideList(imgEl)
{
	window.hoStore.addToBlackList(imgEl.src);
	// window.setTimeout(function()
	// {
	//	hideImge(imgEl);
		// $("img[src='"+ imgEl.src +"']").each(function(){
		// 	hideImge(this);
		// });
	//},2000)
	
} 

function hideFromBlackList(imgEl)
{
	if(blackList.indexOf(imgEl.src) == -1)
	{
		return;
	}
	hideImge(imgEl);
	//chrome.runtime.sendMessage({target: "bg", showpa: true, hasHides: true});	
}

function hideImge(imgEl)
{

	img = $(imgEl);
	if(img.is(".hideOff-hide,.hideOff-removedFromBlack")){return;}

	var wrap = $("<div class='hideOff-cont'></div>");
	var show = $("<div class='hideOff-show' title='Show Again'></div>");
	wrap.on("mouseenter.hideOff",function(){$(this).find(".hideOff-show").show()});
	wrap.on("mouseleave.hideOff",function(){$(this).find(".hideOff-show").hide()});
	show.on("click",function()
	{
		var img = $(this).siblings("img");
		img.addClass("hideOff-removedFromBlack").removeClass("hideOff-hide");
		// console.log(img.attr("src"));
		window.hoStore.removeFromBlackList(img.attr("src"));
		$(this).remove();
		img.off(".hideOff");
		wrap.off(".hideOff");
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
