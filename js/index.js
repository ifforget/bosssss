var btn = document.querySelector('.nav')
var list = btn.querySelectorAll('li')
var lc  = document.querySelector('.lc')
var lcc = lc.querySelectorAll('div')

    for(let i = 0 ; i < list.length ;i++){
         list[i].onclick = function () {
            for(let i = 0 ; i < list.length ;i++){
                list[i].className=""
            }
           list[i].className="btnn"  
         }
    }

    for(let i = 0 ; i < lcc.length ;i++){
        lcc[i].onclick = function () {
           for(let i = 0 ; i < lcc.length ;i++){
               lcc[i].className=""
           }
          lcc[i].className="acr"
        }
   }