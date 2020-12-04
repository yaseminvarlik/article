var allImages = new Array(
	{ url: "assets/img/Fiction/bingo.jpg", text: "What I learned through making work constantly in an iterative cycle is that new meanings keep appearing. Every step I take, pulls me into a new direction. Opens my eyes into discovering different intentions, methods and findings. Applying methods which are so unfamiliar to me opens up new doors. Sometimes, I find myself breaking an object down to its smallest particles to analyze and reveal its complexities and hidden networks. At other times, I look at an object from a larger scope and end up in an unfamiliar space which exposes me to a wider range of perspectives. It is a loop process." },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" },
	{ url: "assets/img/Fiction/bingo.jpg", text: "Placeholder" }
	/*"assets/img/Fiction/protein_bars_back.jpg",
	"assets/img/Fiction/dissect_01.jpg",
	"assets/img/Fiction/back_barebells.jpg",
	"assets/img/Fiction/definition.jpg",
	"assets/img/Fiction/digital_story_board.png",
	"assets/img/Fiction/dissect_02.jpg",
	"assets/img/Fiction/embroidery_01.jpg",
	"assets/img/Fiction/four_dimension.png"*/
);

var allVideos = new Array(
	"https://player.vimeo.com/video/481775501"
);

// Images
for (var i = 0; i < allImages.length; i++) {
	console.log(i);

	let container = document.createElement('div')
	container.setAttribute('class', 'hoverContainer')

	let image = document.createElement('img')
	image.setAttribute('src', allImages[i].url)
	image.setAttribute('class', 'images')

	let text = document.createElement('div')
	text.textContent = allImages[i].text
	text.setAttribute('class', 'text')

	container.append(image);
	container.append(text)
	$('#content').append(container)

	$(image).load(function () {
		// image is loaded

		var imgWidth = container.offsetWidth
		var imgHeight = container.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(container).css("top", offset);
		$(container).css("left", offsetLeft);
	});
}

$(".hoverContainer").draggable();


// Video
for (var i = 0; i < allVideos.length; i++) {
	console.log(i);

	let video = document.createElement('iframe')
	video.setAttribute('src', allVideos[i])
	video.setAttribute('class', 'videos')
	$("#content").append(video);

	$(video).load(function () {
		// image is loaded

		var imgWidth = video.offsetWidth
		var imgHeight = video.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(video).css("top", offset);
		$(video).css("left", offsetLeft);
	});
}

$(".videos").draggable();







