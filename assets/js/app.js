$(".photo-hov").mouseenter(function(e){
    var imageName = $(this).data("img");
    var imgSrc = "./assets/img/" + imageName;
    var mouseX = e.clientX +2
    var mouseY = e.clientY +15
    var scrolled = window.pageYOffset
    console.log(scrolled)
    $("#temp-div").css("left", mouseX)
    $("#temp-div").css("top", mouseY+ scrolled)
    $("#temp-div").html("<img src='"+imgSrc+"'>")
})
$(".photo-hov").mousemove(function(e){
    var mouseX = e.clientX +2
    var mouseY = e.clientY +15
    var scrolled = window.pageYOffset
    $("#temp-div").css("left", mouseX)
    $("#temp-div").css("top", mouseY+ scrolled)
})

$(".mouseOn").mouseleave(function(){
    $("#temp-div").empty();
})