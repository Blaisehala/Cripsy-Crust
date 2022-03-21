
$('document').ready(function(){



  $('.box-box').hover(function(){
    $(this).find('.toppings-content').fadeIn(300)
  }, function(){
    $(this).find('.toppings-content').fadeOut(100)
  });

});



function message (){
  var name = document.getElementById('name');
  var telephone = document.getElementById('tel');
  var location= document.getElementById('location');
  var x = document.getElementById('para');


  if (name.value === "" || telephone.value === '') {
    alert('please fill in relevant information')
  } else {
    x.innerText = (`${[name.value]} We have received your Order.Thank you for reaching out to Papa's `)
  }
}


const form = document.getElementById('sbb');

form.addEventListener('click', function(event){

  event.preventDefault();
  
  message();
  
  });