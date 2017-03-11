$(document).ready(function(){
	//**animation fixed top navbar**//
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //**button scroll to top**//
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    })

    $('a.back-to-top').click(function() {
	    $('body').animate({
	        scrollTop: 0
	    }, 1000);
    		return false;
	});
    //**button scroll to botton**//
    $('#mouse').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 2000);
        return false;
    });

    //якщо буде потрібно//
    //**scroll menu**//
    // $('a:not(.left, .right, .back-to-top)[href^="#"]').click(function(){
    //     var el = $(this).attr('href');
    //     $('body').animate({
    //         scrollTop: $(el).offset().top}, 2000);
    //     return false;
    // });
});