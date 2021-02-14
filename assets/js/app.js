var mouseX;
var mouseY;
var scrolled;
$(".photo-hov").mouseenter(function(e){
    var imageName = $(this).data("img");
    var imgSrc = "./assets/img/" + imageName;
    mouseX = e.clientX +2
    mouseY = e.clientY +15
    scrolled = window.pageYOffset
    console.log(scrolled)

    $("#temp-div").html("<div id='hov-img-wrap'><img src='"+imgSrc+"'></div><div id='close-img'>&#9587</div>")
    $("#hov-img-wrap").css("left", mouseX)
    $("#hov-img-wrap").css("top", mouseY+ scrolled)
})
$(".photo-hov").mousemove(function(e){
    mouseX = e.clientX +2
    mouseY = e.clientY +15
    scrolled = window.pageYOffset
    $("#hov-img-wrap").css("left", mouseX)
    $("#hov-img-wrap").css("top", mouseY+ scrolled)
})

$(".photo-hov").click(function(e){
    // $("#temp-div").css("transform-origin", mouseX+"px "+(mouseY+scrolled)+"px")
    $('.photo-hov').unbind('mouseleave');
    $("#temp-div").addClass("fullscreen")
    // $("#temp-div").css("left", 0)
    // $("#temp-div").css("top", 0)

})


$("#temp-div").click(function(e){   
    console.log("yo")
    if (document.getElementById("hov-img-wrap").contains(e.target)){
      // Clicked in box
    } else{
        console.log("cancel")
        $("#temp-div").removeClass("fullscreen")
        $("#temp-div").empty();

        //has to be function
        $('.mouseOn').bind('mouseleave', emptyTemp);
    }
});


$(".mouseOn").mouseleave(emptyTemp)

function emptyTemp(){
    $("#temp-div").empty();
}

