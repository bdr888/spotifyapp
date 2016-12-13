console.log('linked main.js');

// get request  - search for artist, get the id of that artist, get that artist's related artists
$(document).ready(function(){
	$("#getRelatedArtists").on("submit", function(){
		event.preventDefault();
		var searchArtist = $("#searchArtist").val();
		console.log(searchArtist);
		$.get('https://api.spotify.com/v1/search?q=' + searchArtist + '&type=artist').done(function(response) {
			var resObj = response;
			console.log(resObj);
			response.parseJSON(body);
			console.log("response?"+response);
			// get artist id
			$.get('https://api.spotify.com/v1/artists/' + resObj.artists.items.id + '/related-artists').done(function(response) {
				// var $sentence = jQuery.parseJSON($sentenceResults.responseText);
			$("#results").append("<li>" + response.artists.items.id + "</li>");
		});
		});

	// 	var $results = $.get('https://api.spotify.com/v1/artists/'+ $searchArtist + '3kSqc2brwAF1kWRFWYe2fW/related-artists').done(function(response){
	// 		// var $sentence = jQuery.parseJSON($sentenceResults.responseText);
	// 		$("#results").append("<li>" + response.name + "</li>");
	// 		console.log($results);
	// 		// push res back end db
	// 		// $.post to bakend
	// 	});
	});
});






// https://api.spotify.com/v1/artists/{id}/related-artists