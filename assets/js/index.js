

// Fade in site content

document.getElementById('main-content').style.display = 'block';
document.getElementById('noscript-message').style.display = 'none';

setTimeout(function() {
	document.getElementById('section-header').style.opacity = 1;
	document.getElementById('section-icons').style.opacity = 1;
}, 10);

setTimeout(function() {
	document.getElementById('section-hoodie').style.opacity = 1;
}, 30);

setTimeout(function() {
	document.getElementById('section-footer').style.opacity = 1;
}, 40);


// Resize body according to window dimensions
function setHeight() {
	if(document.body.scrollHeight < window.innerHeight)
	document.getElementById("body").style.height = window.innerHeight + 'px';
}

setHeight();
window.addEventListener('resize', setHeight);

// Borders when hovering on shopify link

const imageOverlay = document.getElementById("hoodie-img-container");

document.getElementById("hoodie-link").addEventListener('mouseenter', function() {
	imageOverlay.style.setProperty("--rainbow-border-opacity", 1);
	imageOverlay.style.setProperty("--gray-border-opacity", 0);
});

document.getElementById("hoodie-link").addEventListener('mouseleave', function() {
	imageOverlay.style.setProperty("--rainbow-border-opacity", 0);
	imageOverlay.style.setProperty("--gray-border-opacity", 1);
});

//document.getElementById("hoodie-img").addEventListener('mouseenter', function() {
//	imageOverlay.style.setProperty("--border-opacity", 1);
//	imageOverlay.style.setProperty("--overlay-opacity", .4);
//});
//
//document.getElementById("hoodie-img").addEventListener('mouseleave', function() {
//	imageOverlay.style.setProperty("--border-opacity", 0);
//	imageOverlay.style.setProperty("--overlay-opacity", 0);
//});

