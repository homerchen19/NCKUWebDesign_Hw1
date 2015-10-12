    $( "#pic1" ).hover(function(){
            $(this).fadeTo(500, 0);
            $("#pic1-back").fadeTo(400, 1);
        }, function(){
            $(this).fadeTo(500, 1);
            $("#pic1-back").fadeTo(400, 0);
        }
    );
    $( "#pic2" ).hover(function(){
            $(this).fadeTo(500, 0);
            $("#pic2-back").fadeTo(400, 1);
        }, function(){
            $(this).fadeTo(500, 1);
            $("#pic2-back").fadeTo(400, 0);
        }
    );
    $( "#pic3" ).hover(function(){
            $(this).fadeTo(500, 0);
            $("#pic3-back").fadeTo(400, 1);
        }, function(){
            $(this).fadeTo(500, 1);
            $("#pic3-back").fadeTo(400, 0);
        }
    );
    $( "#pic4" ).hover(function(){
            $(this).fadeTo(500, 0);
            $("#pic4-back").fadeTo(400, 1);
        }, function(){
            $(this).fadeTo(500, 1);
            $("#pic4-back").fadeTo(400, 0);
        }
    );
    $( "#pic5" ).hover(function(){
            $(this).fadeTo(500, 0);
            $("#pic5-back").fadeTo(400, 1);
        }, function(){
            $(this).fadeTo(500, 1);
            $("#pic5-back").fadeTo(400, 0);
        }
    );
    $( "#pic6" ).hover(function(){
            $(this).fadeTo(500, 0);
            $("#pic6-back").fadeTo(400, 1);
        }, function(){
            $(this).fadeTo(500, 1);
            $("#pic6-back").fadeTo(400, 0);
        }
    );

    $alreadyShow = 1;
    $alreadyShow2 = 1;
    $alreadyShow3 = 1;
    $("#portfolio").css("opacity", "0");
    $("#about").css("opacity", "0");
    $("#contact").css("opacity", "0");
    $(window).scroll(function(){
        if($(window).scrollTop() > 10 && $alreadyShow == 1) {
            $("#portfolio").fadeTo(1500, 1);
            $alreadyShow = 0;
        }

        if($(window).scrollTop() > 800 && $alreadyShow2 == 1) {
            $("#about").fadeTo(1500, 1);
            $alreadyShow2 = 0;
        }

        if($(window).scrollTop() > 1300 && $alreadyShow3 == 1) {
            $("#contact").fadeTo(1500, 1);
            $alreadyShow3 = 0;
        }

        if($(window).scrollTop() < 10 && $alreadyShow == 0) {
            $("#portfolio").fadeTo(1000, 0);
            $alreadyShow = 1;
        }

        if($(window).scrollTop() < 800 && $alreadyShow2 == 0) {
            $("#about").fadeTo(1000, 0);
            $alreadyShow2 = 1;
        }

        if($(window).scrollTop() > 600 && $(window).scrollTop() < 1300 && $alreadyShow3 == 0) {
            $("#contact").fadeTo(1000, 0);
            $alreadyShow3 = 1;
        }

    });

    $('a[href^="#"]').click(function() {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1400);
        return false;
        e.preventDefault();

    });