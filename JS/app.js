
$('document').ready(function(){



  $('.box-box').hover(function(){
    $(this).find('.toppings-content').fadeIn(300)
  }, function(){
    $(this).find('.toppings-content').fadeOut(100)
  });

});



