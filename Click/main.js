


// $("button").click(function(){
// 	alert("CLICK");
// });

// $('.click').click(function(){
// 	alert("bello");
// })

//remove click windows from beginning to last
$('.bg').click(function(){

	$('.click:not(:last)').fadeOut()


})


//clone click div function: define variables
$('.click').click(function(){
	var audioArray = document.getElementsByClassName('audio');
	var i = Math.floor(Math.random()*audioArray.length)
	//play audio on click
	audioArray[i].play();

	l = Math.floor(Math.random()*95)+"vw"
	t = Math.floor(Math.random()*96)+"vh"
	w = Math.floor(Math.random()*200)+100+"px"
	h = Math.floor(Math.random()*200)+50+"px"
	console.log(l)
	//actually clone divs
	$(this)

		// .fadeOut()
		.clone(true, true)
		.css({


			left: l,
			top: t,
			width: w,
			height: h,
			

		})

		//put clone somewhere randomly in the body
		.appendTo("body");
	


});

//play audio on hover

 $(".click").hover(function(){
 		var audioArray = document.getElementsByClassName('audio');
		var i = Math.floor(Math.random()*audioArray.length)
        audioArray[i].play();
        },
    function(){
        click_audio.load();
    });

