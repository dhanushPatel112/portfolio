// header
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// animation js
var bkgColors = [[26,56,82],[178,160,248],[25,33,44],[52,34,61],[71,194,235],[230,191,0],[37,110,143]],
		bkgColorIndex = [0, 1, 2, 3],
		bkgColorStep = 0,
		bkgColorSpeed = 0.01,
		animateBkgLoop,
		animateBkgStop;

function animateBkg() {
	var color_1_start	= bkgColors[bkgColorIndex[0]],
			color_1_end		= bkgColors[bkgColorIndex[1]],
			color_2_start	= bkgColors[bkgColorIndex[2]],
			color_2_end		= bkgColors[bkgColorIndex[3]],
			bkgColorStepIndex = 1 - bkgColorStep,
			r1 = Math.round(bkgColorStepIndex * color_1_start[0] + bkgColorStep * color_1_end[0]),
			g1 = Math.round(bkgColorStepIndex * color_1_start[1] + bkgColorStep * color_1_end[1]),
			b1 = Math.round(bkgColorStepIndex * color_1_start[2] + bkgColorStep * color_1_end[2]),
			color_1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")",
			r2 = Math.round(bkgColorStepIndex * color_2_start[0] + bkgColorStep * color_2_end[0]),
			g2 = Math.round(bkgColorStepIndex * color_2_start[1] + bkgColorStep * color_2_end[1]),
			b2 = Math.round(bkgColorStepIndex * color_2_start[2] + bkgColorStep * color_2_end[2]),
			color_2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
	
	$('.bkg__gradient .flex-item').css({
		background: "linear-gradient(155deg, " + color_1 + ", " + color_2 + ")"
	});

	bkgColorStep += bkgColorSpeed;
	
	if (bkgColorStep >= 1) {
		bkgColorStep %= 1;
		
		bkgColorIndex[0] = bkgColorIndex[1];
		bkgColorIndex[2] = bkgColorIndex[3];
		
		bkgColorIndex[1] = (bkgColorIndex[1] + Math.floor(1 + Math.random() * (bkgColors.length - 1))) % bkgColors.length;
		bkgColorIndex[3] = (bkgColorIndex[3] + Math.floor(1 + Math.random() * (bkgColors.length - 1))) % bkgColors.length;
	}
}

$(function animateBkgInit() {
	animateBkgLoop = setInterval(function() {
		animateBkg();
	}, 20);
		
	// UNCOMMENT FUNCTION TO STOP ANIMATION AFTER DURATION
	
	// animateBkgStop = setTimeout(function() {
	// 	clearInterval(animateBkgLoop);
	// }, 180000)
	});