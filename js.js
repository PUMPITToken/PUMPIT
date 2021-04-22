$(document).ready(function(){
   $("#aboutUsBtn").click(function(){
        $("#aboutUsBox").fadeToggle(600); 
       $(".layer").toggle();
   }); 
    
    $(".layer").click(function(){
       $("#aboutUsBox").fadeOut();
        $(".layer").fadeOut();
    });
});