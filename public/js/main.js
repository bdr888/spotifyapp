$(document).ready(function(){

	$("#getRelatedArtists").on("submit", function(){
		event.preventDefault();
		var $searchArtist = $("#searchArtist").val();
		var $results = $.get('https://api.spotify.com/v1/artists/'+ $searchArtist + '3kSqc2brwAF1kWRFWYe2fW/related-artists').done(function(response){
			// var $sentence = jQuery.parseJSON($sentenceResults.responseText);
			$("#results").append("<li>" + response.name + "</li>");
			console.log($results);
		});
	});
});