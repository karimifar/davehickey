$(".photo-hov").mouseenter(function(e){
    var imageName = $(this).data("img");
    var imgSrc = "./assets/img/" + imageName;
    var mouseX = e.clientX +2
    var mouseY = e.clientY +15
    var scrolled = window.pageYOffset
    console.log(scrolled)
    $("#temp-div").css("left", mouseX)
    $("#temp-div").css("top", mouseY+ scrolled)
    $("#temp-div").html("<div class='hov-img-wrap'><img src='"+imgSrc+"'></div>")
})
$(".photo-hov").mousemove(function(e){
    var mouseX = e.clientX +2
    var mouseY = e.clientY +15
    var scrolled = window.pageYOffset
    $("#temp-div").css("left", mouseX)
    $("#temp-div").css("top", mouseY+ scrolled)
})

$(".photo-hov").click(function(e){
    $('.photo-hov').unbind('mouseleave');
    $("#temp-div").addClass("fullscreen")
    $("#temp-div").css("left", 0)
    $("#temp-div").css("top", 0)

})


$("#temp-div").click(function(e){   
    console.log("yo")
    if (document.getElementsByClassName("hov-img-wrap")[0].contains(e.target)){
      // Clicked in box
    } else{
        console.log("cancel")
        $("#temp-div").removeClass("fullscreen")
        $("#temp-div").empty();

        //has to be function
        $('.mouseOn').bind('mouseleave');
    }
});


$(".mouseOn").mouseleave(function(){
    $("#temp-div").empty();
})

