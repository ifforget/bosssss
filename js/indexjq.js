$(function(){
    var number = ''
    $(".flow_bottom_btn").on("click",function(){
        $(".flow_bottom_btn").hide()
    })
})

$(".flow_bottom_top").find("li").on("click",function(){
    $(".flow_bottom_btn").show()
     number = $(this).index()+1
    $(".flow_bottom_btnn img").attr("src","images/bg"+number+".jpg")
  
   
})

$(".lcleft").on("click",function(){
    number++
    if(number == 5 ){
        number = 4
        $(".flow_bottom_btnn img").attr("src","images/bg"+number+".jpg")
    }else{
        $(".flow_bottom_btnn img").attr("src","images/bg"+number+".jpg")
    }
   return false;
})
$(".lcright").on("click",function(){
   number--

   if(number == 0){
      number = 1
      $(".flow_bottom_btnn img").attr("src","images/bg"+number+".jpg")
   }else{
    $(".flow_bottom_btnn img").attr("src","images/bg"+number+".jpg")
   }
    return false;
 })
    