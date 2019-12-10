function setLayout() {
	var w = window.innerWidth;
	var x = document.getElementsByClassName("figure-lg");
	var i;
	for (i = 0; i < x.length; i++) {
    x[i].style.width = w + "px";
	}
};

// document.getElementById('scroll').style.overflowX = "hidden";	

function scrollNext() {
	var wdth = document.getElementById('scroll').offsetWidth;
	var scrl = wdth * .8;
	var scrollPos = document.getElementById('scroll').scrollLeft;
	$('#scroll').animate({ scrollLeft: scrollPos + scrl }, 500);
};

function scrollPrev() {
	var wdth = document.getElementById('scroll').offsetWidth;
	var scrl = wdth * .8;
	var scrollPos = document.getElementById('scroll').scrollLeft;
	$('#scroll').animate({ scrollLeft: scrollPos - scrl }, 500);
};

// For use in the caroImages() function below
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
	
function caroImages() {
	
	// 104 possible images selected by the artist
	var images = [
		"GC_20180725_125353_1532543135.jpg",
		"GC_20180725_125620_1532543150-2.jpg",
		"GC_20180725_125620_1532543150.jpg",
		"GC_20180725_130936_1532543051.jpg",
		"GC_20180725_132712_1532543322.jpg",
		"GC_20180725_155426_1532552005.jpg",
		"GC_20180725_155852_1532543361-1.jpg",
		"GC_20180725_155852_1532543361.jpg",
		"GC_20180725_160012_1532543370.jpg",
		"GC_20180725_160831_1532543030.jpg",
		"GC_20180725_160839_1532543043.jpg",
		"GC_20180725_161940_1532552025.jpg",
		"GC_20180725_163443_1532543476.jpg",
		"GC_20180726_111017_1532627614.jpg",
		"GC_20180726_111027_1532627344.jpg",
		"GC_20180726_112152_1532627496.jpg",
		"GC_20180726_161444_1532627419-2.jpg",
		"GC_20180726_161444_1532627419.jpg",
		"GC_20180726_161507_1532627470.jpg",
		"GC_20180726_161623_1532627331-2.jpg",
		"GC_20180726_161623_1532627331.jpg",
		"GC_20180726_162433_1532627384.jpg",
		"GC_20180726_163510_1532627505.jpg",
		"GC_20180728_102002_1533064742.jpg",
		"GC_20180728_103359_1533065059.jpg",
		"GC_20180728_103453_1533064987.jpg",
		"GC_20180728_103503_1533065049.jpg",
		"GC_20180728_103519_1533064677-2.jpg",
		"GC_20180728_103519_1533064677-3.jpg",
		"GC_20180728_103519_1533064677.jpg",
		"GC_20180728_110427_1533064802.jpg",
		"GC_20180728_112621_1533063634.jpg",
		"GC_20180728_113614_1533064631-2.jpg",
		"GC_20180728_113614_1533064631.jpg",
		"GC_20180728_113633_1533064646.jpg",
		"GC_20180729_104137_1533064490.jpg",
		"GC_20180729_104413_1533064113.jpg",
		"GC_20180729_104502_1533064010.jpg",
		"GC_20180729_104526_1533064024.jpg",
		"GC_20180729_104544_1533064044.jpg",
		"GC_20180729_104553_1533064093.jpg",
		"GC_20180729_104705_1533064189.jpg",
		"GC_20180729_104719_1533064205.jpg",
		"GC_20180729_105004_1533063729.jpg",
		"GC_20180729_105115_1533063897.jpg",
		"GC_20180729_105614_1533064473.jpg",
		"GC_20180729_105702_1533064339-2.jpg",
		"GC_20180729_105702_1533064339.jpg",
		"GC_20180729_105709_1533064404.jpg",
		"GC_20180729_105804_1533064335.jpg",
		"GC_20180729_105838_1533063882.jpg",
		"GC_20180729_110126_1533063714.jpg",
		"GC_20180729_110158_1533064593.jpg",
		"GC_20180729_110231_1533065505.jpg",
		"GC_20180729_110238_1533065518.jpg",
		"GC_20180729_110250_1533065546.jpg",
		"GC_20180729_110256_1533065552.jpg",
		"GC_20180729_110302_1533065557.jpg",
		"GC_20180729_110309_1533063217.jpg",
		"GC_20180729_110316_1533063221.jpg",
		"GC_20180729_110322_1533063171.jpg",
		"GC_20180729_110329_1533063178.jpg",
		"GC_20180729_110335_1533063182.jpg",
		"GC_20180729_110353_1533063197.jpg",
		"GC_20180729_111919_1533063537.jpg",
		"GC_20180729_112548_1533065296.jpg",
		"GC_20180729_113023_1533065265-2.jpg",
		"GC_20180729_113023_1533065265.jpg",
		"GC_20180729_113939_1533065141.jpg",
		"IMG_0474-2.jpg",
		"IMG_5666.jpg",
		"tmp_19_1hK7J5.jpg",
		"tmp_20_Iof0rf.jpg",
		"tmp_21_XHjoEs.jpg",
		"tmp_44_OrDcwG.jpg",
		"tmp_47_3gAMMx.jpg",
		"tmp_48_NNNtpI.jpg",
		"tmp_59_fE6TzZ.jpg",
		"tmp_60_C9Q1Q7.jpg",
		"tmp_62_8gDRO3.jpg",
		"tmp_63_Oi7bTn.jpg",
		"tmp_66_6JtcpF.jpg",
		"tmp_67_iQ6NLf.jpg",
		"tmp_70_z95d5W-2.jpg",
		"tmp_70_z95d5W.jpg",
		"tmp_74_rPAgWI.jpg",
		"tmp_80_zhNYNE.jpg",
		"tmp_82_eSKsWy.jpg",
		"tmp_83_eaMzuI.jpg",
		"tmp_84_ggRqTz.jpg",
		"tmp_85_sjhvFl.jpg",
		"tmp_87_5FH6vR-2.jpg",
		"tmp_87_5FH6vR.jpg",
		"tmp_88_QVyie9.jpg",
		"tmp_89_nmIAlJ.jpg",
		"tmp_90_b1CVfg.jpg",
		"tmp_93_UnifDf-2.jpg",
		"tmp_93_UnifDf-3.jpg",
		"tmp_93_UnifDf.jpg",
		"tmp_94_X5PRsc.jpg",
		"tmp_97_h2dp80.jpg",
		"tmp_98_4RnhaZ.jpg",
		"tmp_100_n7nYSv.jpg",
		"tmp_107_kpQjwo.jpg" ]
		
	// Mix up the order each time	
	images = shuffle(images);
	
	// Start a count so we know which image to use next
	var globalCount = 0;
		
	// Find the blocks that should be filled with images
	// in the markdown files we use <div class="random-images"></div>
	var imageBlocks = document.getElementsByClassName('random-images');
	
	for (i = 0; i < imageBlocks.length; i++) {
		
		// Adjust the grid based on the browser width
		var width = window.innerWidth;
		var total;
		if (width <= 959) {
			total = 6;
			imageBlocks[i].classList.add("figure");
			
		} else {
			total = 10;
			imageBlocks[i].classList.add("figure-lg");
		}
		
		// Start a count to know how many images were used in this grid
		var gridCount = 0;
	
		for (x = 0; x < total; x++) {
			
			// If the value is 0.5 it will be 50/50
			// a lower number will increase the number of images in the grids 
			// a higher number will decrease the number
			var count = Math.random() >= 0.35;
			
			// If the count is 0, place a blank/transparent image in the grid
			if (count == 0 ) {
				var fig = document.createElement('figure');			
				var src = "../assets/images/caro/blank.png";			
				var img = document.createElement('img');
				img.setAttribute("src", src);
				fig.appendChild(img);			
				imageBlocks[i].appendChild(fig);			
			};
			// if the count is 1, add an image into the grid, caption it with its
			// filename, and increment the count of images placed in this grid so far
			if (count == 1 ) {
				var fig = document.createElement('figure');				
				var imageNumber = globalCount + gridCount;
				var baseUrl = "../assets/images/caro/";
				var src = baseUrl.concat(images[imageNumber]);				
				var img = document.createElement('img');
				img.setAttribute("src", src);			
				var caption = document.createElement('figcaption');
				var text = document.createTextNode(images[imageNumber]);
				caption.appendChild(text);
				fig.appendChild(img);
				fig.appendChild(caption);
				imageBlocks[i].appendChild(fig);
				gridCount++;
			};		
		}
		
		// Up the global count based on how many images were placed in the last grid
		var globalCount = globalCount + gridCount;
	}
};
	