/**
 * Created by Administrator on 2018/6/11.
 */

var obj = document.getElementById("scroll");
var four;
// 置顶点击事件

obj.onclick = function() {
    four=setInterval(FourscrollBy,10)
};

function FourscrollBy(eachHeight){
    if(document.documentElement && document.documentElement.scrollTop) //IE
    {
        if(document.documentElement.scrollTop<=0){
            clearInterval(four);
        }else{
            window.scrollBy(0,-50);
        }
    }else{              //Chrome不支持documentElement.scrollTop
        if(document.body.scrollTop<=0){
            clearInterval(four);
        }else{
            window.scrollBy(0,-50);
        }
    }
}

// 窗口滚动检测
//    window.onload = function() {
//        obj.style.display = (document.body.scrollTop >= 500) ? "block" : "none";
//    }