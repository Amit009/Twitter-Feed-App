// Main js for twitter feed app
// Modular Design Pattern

"use strict";

// Define functions
var tweetFeed = (function() {

	// Initailly show loader
	$('.tweet_loader').show();

	// Set Timeout to 1s 
	setTimeout( function() { 

		// Get the json file
		$.getJSON("assets/json/data.json", function(data) {

			var output = "";

			$.each( data, function( key, val ) {

				output +="<div class='tweet_list'><div class='avatar mr3 center'>";
				output += "<img src='" + val.displayPic + "' class='circle' alt='avatar'></div>";
				output += "<div class='tweet_content'><div class='author_name'><h3 class='inline-block m0 mr1'>";

				if( val.retweeted ) {
					output += "<i class='fa fa-refresh retweeted mr1' aria-hidden='true'></i>";
				}

				output += "<a href='#'' class='text-decoration-none'>";
				output += val.name + "</a></h3><span><a href='#' class='text-decoration-none'>" + val.handle + "</a></span>";
				output += "<span class='posted_time right'>" + val.timePosted + "</span></div>";

				output += "<div class='author_tweet'>";

				if( val.tweetBody.tweetMessage ) {
					output += "<p>" + val.tweetBody.tweetMessage + "</p>";
				}
				if( val.tweetBody.video ) {
					output += "<p><img class='fit' src='" + val.tweetBody.video + "' alt='video'></p>";
				}
				
				output += "</div><div class='posted_on_info'><ul class='list-reset mb0'>";
				output += "<li class='inline-block mr3'><a href='#''><i class='fa fa-reply' aria-hidden='true'></i></a></li>";
				output += "<li class='inline-block mr3'><a href='#''><i class='fa fa-star' aria-hidden='true'></i></a></li>";
				output += "<li class='inline-block mr3'><a href='#''><i class='fa fa-refresh' aria-hidden='true'><span class='inline-block ml1'>" + val.reTweetedBy + "</span></i></a></li>";
				output += "<li class='inline-block mr3'><a href='#''><i class='fa fa-ellipsis-h' aria-hidden='true'></i></a></li>";
				output += "<li class='inline-block right expand'><a href='#''><i class='fa fa-expand' aria-hidden='true'></i></a></li></ul></div></div></div>";

		  	});

			// hide loader
			$('.tweet_loader').hide();

			// set all tweet data to twitter feed
		  	$('#twitter_feed').html(output);
		});
	}, 3000);

})();

var navbarFixed = (function() {
	// Scroll to fixed the navigation 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 90) {
            $('.navbar_container').addClass('navbar-fixed');
        } 
        if ($(this).scrollTop() == 0) {
            $('.navbar_container').removeClass('navbar-fixed');
        }
    });

})();

// call function
tweetFeed;
navbarFixed;
