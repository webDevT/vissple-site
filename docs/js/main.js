$(function(){
    //start smooth scroll
    $(".main-screen__buttons, .next-section").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 3000);
    });
    //end smooth scroll

    //start scroll by section
    if($(window).width() > 768) {
    var anchors = [];
	var currentAnchor = -1;
	var isAnimating  = false;
	$(function(){
		function updateAnchors() {
			anchors = [];
			$('.anchor').each(function(i, element){
				anchors.push( $(element).offset().top );
			});
		}
		$('body').on('mousewheel', function(e){
			e.preventDefault();
			e.stopPropagation();
			if( isAnimating ) {
				return false;
			}
			isAnimating  = true;
			if( e.originalEvent.wheelDelta >= 0 ) {
				currentAnchor--;
			}else{
				currentAnchor++;
			}
			if( currentAnchor > (anchors.length - 1) 
			   || currentAnchor < 0 ) {
				currentAnchor = 0;
			}

			

			isAnimating  = true;
			$('html, body').animate({
				scrollTop: parseInt( anchors[currentAnchor] )
			}, 3000, 'swing', function(){
				isAnimating  = false;
			});
		});
		updateAnchors();   
	});
    }
    //end scroll by section

    //start menu btn
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    })

    //end menu btn

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){
        $('.bubles').addClass("anim");
		$('.main-title').addClass("anim");
        }
        else{
        $('.bubles').removeClass("anim");
		$('.main-title').removeClass("anim");
        }
        });

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100){
			
			$('.main-title').addClass("anim");
			}
			else{
			
			$('.main-title').removeClass("anim");
			}
			});
});

