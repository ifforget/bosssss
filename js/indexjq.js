$(function(){

    $(".flow_bottom_btn").on("click",function(){
        $(".flow_bottom_btn").css('dispaly','none')
        // this.style.display = "none"
       console.log("aaa")
    })
})


$(".lcleft").on("click",function(e){
    $(".flow_bottom_btnn img").attr("src","images/bg4.jpg")
   console.log("left")
   return false;
})
$(".lcright").on("click",function(e){
   
    console.log("right")
    return false;
 })
    