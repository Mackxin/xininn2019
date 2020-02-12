
// 情报局js代码开始
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    if(currentScrollPos > 188){
        document.getElementById('dingImg').style.display = 'block';
        document.getElementById('ding').style.display = 'block';
    }else{
        document.getElementById('dingImg').style.display = 'none';
        document.getElementById('ding').style.display = 'none';
    }
}
// 情报局js代码结束