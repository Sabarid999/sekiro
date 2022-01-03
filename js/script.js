// $(selector).property(value)



// $(".btn1").click(function(){
//   $(".one").slideToggle()
// })


// $(".btn2").click(function(){
//   $(".one").slideDown()
// })

$(".srch").click(function(){
  $("#search-part").slideDown()
})

$(".crs").click(function(){
  $("#search-part").slideUp()
})

$(".bar-reveal").click(function(){
  $(".bar-hide").fadeToggle()
})


$(document).ready(function(){
    $('.venobox').venobox();
});
