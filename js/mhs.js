// top button
$(function () {
    $(".top_pipe").mouseover(function () {
      $(".top_standing_mario>img").stop().animate(
        {
          bottom: "0",
        },
        400
      ),
        $(".top_txt").stop().animate(
          {
            opacity: "1",
          },
          400,
          "linear"
        );
    });
    $(".top_pipe").mouseout(function () {
      $(".top_standing_mario>img").stop().animate(
        {
          bottom: "-70px",
        },
        300
      ),
        $(".top_txt").stop().animate(
          {
            opacity: "0",
          },
          100,
          "linear"
        );
    });
    $(".topBtn_wrap").click(function () {
      $(".top_txt").stop().animate(
        {
          opacity: "0",
        },
        100,
        "linear"
      ),
        $(".top_mario").animate(
          {
            top: "-100px",
          },
          200
        ),
        $(".top_mario").animate(
          {
            top: "0px",
          },
          200
        ),
        $(".top_standing_mario>img").animate(
          {
            opacity: "0",
          },
          200
        ),
        $(".top_jumping_mario>img").animate(
          {
            opacity: "1",
          },
          200
        ),
        $(".top_jumping_mario>img").animate(
          {
            opacity: "0",
          },
          200
        ),
        $(".top_standing_mario>img").animate(
          {
            opacity: "1",
          },
          200
        );
    });
  });

// slider
$('.history').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });

// $('.sec3_main_content').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.history').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });


//   scroll effect

$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $(".topBtn_wrap")
            .css("bottom", "0px")
            .css("transition", "all 0.5s ease");
        }
        else if ($(this).scrollTop() < 400) {
            // section1 main title
            $(".topBtn_wrap")
            .css("bottom", "-110px")
            .css("transition", "all 0.5s ease");
            $("body").css("background", "#7286f7");
          } 
    });
});