var allImages = new Array("assets/img/Fiction/bingo.jpg",
	"assets/img/Fiction/protein_bars_back.jpg",
	"assets/img/Fiction/dissect_01.jpg",
	"assets/img/Fiction/back_barebells.jpg",
	"assets/img/Fiction/definition.jpg",
	"assets/img/Fiction/digital_story_board.png",
	"assets/img/Fiction/dissect_02.jpg",
	"assets/img/Fiction/embroidery_01.jpg",
	"assets/img/Fiction/four_dimension.png"
);

var allVideos = new Array(
	"assets/img/Fiction/igtv.mp4"


);

//this is me making sure I can append an image with a loop 

for (var i = 0; i < allImages.length; i++) {
	console.log(i);

	let image = document.createElement('img')
	image.setAttribute('src', allImages[i])
	image.setAttribute('class', 'images')
	$("body").append(image);

	$(image).load(function () {
		// image is loaded

		var imgWidth = image.offsetWidth
		var imgHeight = image.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(image).css("top", offset);
		$(image).css("left", offsetLeft);
	});




}


var randomLine = Math.floor(Math.random() * (allImages.length));

//I have no idea why, but when I got ride of this line it got rid of my  text:
// $(".images").append(allImages[randomLine])

for (var multiplier = 0; multiplier < allImages.length; multiplier++) {
	var result = multiplier * 6;

	//I also got rid of these lines because I'm already appending the image to the body above
	// console.log(allImages[multiplier]);
	// $("body").append("<img class='images src="+allImages[multiplier]+">");

};

/*for (var i = 0; i  < allVideos.length;  i++) {
	console.log(i);
	$("body").append("<video class='videos' src='"+allVideos[i]+"'>");
}*/


var randomLine = Math.floor(Math.random() * (allVideos.length));

//I have no idea why, but when I got ride of this line it got rid of my  text:
// $(".images").append(allImages[randomLine])

for (var multiplier = 0; multiplier < allVideos.length; multiplier++) {
	var result = multiplier * 6;

	//I also got rid of these lines because I'm already appending the image to the body above
	// console.log(allImages[multiplier]);
	// $("body").append("<img class='images src="+allImages[multiplier]+">");

};


/*$('.images').each(function(){
	var imgWidth = $(this).offsetWidth
	var imgHeight = $(this).offsetHeight

	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;

	var xMin = imgHeight;
	var xMax = windowWidth - imgWidth;

	var yMin = imgHeight;
	var yMax = windowHeight - imgHeight;

	var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
	var offsetLeft = Math.floor(Math.random() * (xMax- xMin) + xMin);
	$(this).css("top",offset);
	$(this).css("left",offsetLeft);
});*/



$(".images").draggable();




