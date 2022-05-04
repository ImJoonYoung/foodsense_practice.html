$(function(){
  $('.food_slide').slick({
  dots: true,
        vertical: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autospeed:4000,
        speed:1000
   });

   $(".slick-dots li").mouseover(function(){
     var n=$(this).index();
     $(".indi li a").eq(n).css({color:"#ff7f50"});
     $(".indi li").eq(n).css({background:"rgba(74, 141, 136,0.4)"});
   });

   $(".slick-dots li").mouseleave(function(){
    var n=$(this).index();
    $(".indi li a").eq(n).css({color:"#34ac98"});
    $(".indi li").eq(n).css({background:"rgba(74, 141, 136,0.2)"});
  });
});