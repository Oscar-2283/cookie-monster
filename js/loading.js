


 function load(){
  if ($(document).height() > $(window).height()) {
    $("html").addClass("noscroll");
  }else{
    $("html").addClass("fixWindow"); 
  }
    $(window).on("load", function () {
    $("div.loadScreen").fadeIn(3000).delay(6200).fadeOut("slow",function(){
        modal()
        if ($(document).height() > $(window).height()) {
          $("html").removeClass("noscroll");
      }else{
         $("html").removeClass("fixWindow");
     }
    });
    });
}

function modal(){
  $(window).ready(() => {
    $('#myModal').modal('show');
  })
}

load();