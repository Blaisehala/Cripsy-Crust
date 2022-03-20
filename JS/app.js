
$('document').ready(function(){




  const addHoverEffect = () => {
    const overlay = $("# h5");
    overlay.hide();
    $(".").hover(function () {
      $(this).find("h5").slideToggle("fast");
    });

});

