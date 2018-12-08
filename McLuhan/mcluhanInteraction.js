



// cursor
$(document).on('mousemove', function(e){
    $('.cursor1').css({
       top:   e.pageY
    });
    $('.cursor2').css({
       left:   e.pageX,
       top: e.pageY
    });
    $('.cursor3').css({
       left:   e.pageX,
       top: e.pageY
    });
});

/* OBJECTS FLY IN ON SCROLL */


if($(window).width()>1000){
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 600) {
		$(".series-title").animate({
			left: "25%"});
	}else{$(".series-title").css({left: "-50%"});
	}
	});

	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 800) {
		$(".write-up").animate({
			left: "50%"});
	}else{$(".write-up").css({left: "150%"});

	}

	});
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 1200) {
		$(".post-write-up").animate({
			left: "25%"});
	}else{$(".post-write-up").css({left: "-150%"});

	}
	});



	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 1600) {
		$(".event1").animate({
			left: "25%"});
	}else{$(".event1").css({left: "-50%"});

	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 1800) {
		$(".event2").animate({
			left: "50%"});
	}else{$(".event2").css({left: "150%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2000) {
		$(".event3").animate({
			left: "25%"});
	}else{$(".event3").css({left: "-50%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2200) {
		$(".event4").animate({
			left: "70%"});
	}else{$(".event4").css({left: "150%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2400) {
		$(".event5").animate({
			left: "50%"});
	}else{$(".event5").css({left: "-50%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2600) {
		$(".event6").animate({
			left: "70%"});
	}else{$(".event6").css({left: "150%"});
	}
	});
}else{
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) {
		$(".series-title").animate({
			left: "25%"});
	}else{$(".series-title").css({left: "-50%"});
	}
	});

	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 300) {
		$(".write-up").animate({
			left: "25%"});
	}else{$(".write-up").css({left: "150%"});

	}

	});
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 600) {
		$(".post-write-up").animate({
			left: "25%"});
	}else{$(".post-write-up").css({left: "-150%"});

	}
	});



	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 800) {
		$(".event1").animate({
			left: "25%"});
	}else{$(".event1").css({left: "-100%"});

	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 1200) {
		$(".event2").animate({
			left: "25%"});
	}else{$(".event2").css({left: "150%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 1600) {
		$(".event3").animate({
			left: "25%"});
	}else{$(".event3").css({left: "-100%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2000) {
		$(".event4").animate({
			left: "25%"});
	}else{$(".event4").css({left: "150%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2200) {
		$(".event5").animate({
			left: "25%"});
	}else{$(".event5").css({left: "-100%"});
	}
	});


	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 2400) {
		$(".event6").animate({
			left: "25%"});
	}else{$(".event6").css({left: "150%"});
	}
	});

}




