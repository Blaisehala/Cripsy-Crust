
$(document).ready(function(){



  $('.box-box').hover(function(){
    $(this).find('.toppings-content').fadeIn(300)
  }, function(){
    $(this).find('.toppings-content').fadeOut(100)
  });



 $('.table').hide();
 $('.order-btn').hide();



  $('.btn-dlv').click(function() {
    var name = document.getElementById('name');
    var telephone = document.getElementById('tel');
    var location= document.getElementById('location');
    // var x = document.getElementById('para');
    var PapaPizza = $("#pizzatype option:selected").val();
    var PizzaCrust= $("#crusted option:selected").val();
    var PapaToppings = $("#toptype option:selected").val();
    var total = parseInt(PapaPizza) + parseInt(PizzaCrust) + parseInt(PapaToppings);
    var order = 0;
    var grandTotal = 0;

    $("table").show();
    $(".order-btn").show();
    $(".btn-dlv").hide();
    $('.location').hide();


    function Pizza(type, crust,toppings, total, orderNumber) {
      this.pizzatype = type;
      this.crusted = crust;
      this.toptype = toppings;
      this.total = total;
      this.orderNumber= orderNumber;
    }


    $('.plusplus').click(function() {
      var PapaPizza = $("#pizzatype option:selected").val();
      var PizzaCrust= $("#crusted option:selected").val();
      var PapaToppings = $("#toptype option:selected").val();
      var total = parseInt(PapaPizza) + parseInt(PizzaCrust) + parseInt(PapaToppings);
     order = order +  1;
       grandTotal = grandTotal + total;

       if (name.value === "" || telephone.value === '' ) {
           alert('please Enter you Name and Telephone')
           } 

          //  preventDefault();

           
      var newPizza = new Pizza(PapaPizza, PizzaCrust, PapaToppings, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNumber + '</th><td id="size">' + $("#pizzatype option:selected").text() + " " + newPizza.pizzatype + '</td><td id="toppings">' + $(".toptype option:selected").text() + "   " + newPizza.toptype + '</td><td id="crust">' + $(".crusted option:selected").text() + "  " + newPizza.crusted + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#BigPoppa").append(newRow);

      $()



    });

 $('.checkcheck').click(function(){

   $('.pomo').show();
  
  


 });

  



    });

    

    

  });



















































































