var btn = document.querySelector('.nav')
var list = btn.querySelectorAll('li')
var lc  = document.querySelector('.lc')
var lcc = lc.querySelectorAll('div')
var flow = document.querySelector('.flow_bottom_top')
var flowleft = document.querySelector('.lcleft')
var flowright = document.querySelector('.lcright')

// 导航
    for(let i = 0 ; i < list.length ;i++){
         list[i].onclick = function () {
            for(let i = 0 ; i < list.length ;i++){
                list[i].className=""
            }
           list[i].className="btnn"  
         }
    }
// 流程
    for(let i = 0 ; i < lcc.length ;i++){
        lcc[i].onclick = function () {
           for(let i = 0 ; i < lcc.length ;i++){
               lcc[i].className=""
           }
          lcc[i].className="acr"
        }
   }

   
