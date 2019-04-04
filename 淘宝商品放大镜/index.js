var oLeft = document.getElementsByClassName('left')[0];
var oHover = document.getElementsByClassName('hover')[0];
var oRight = document.getElementsByClassName('right')[0];
var oLarge = document.getElementsByClassName('large')[0];

oLeft.onmouseover = function () {
    oHover.style.display = 'block';
    oRight.style.display = 'inline-block'
};
oLeft.onmouseout = function () {
    oHover.style.display = 'none';
    oRight.style.display = 'none'
};
oLeft.onmousemove = function (e) {
    var x = e.clientX - oHover.offsetWidth / 2;
    var y = e.clientY - oHover.offsetHeight / 2;
    var min = 0;
    var max = oLeft.offsetWidth - oHover.offsetWidth;
    if (x < min) {
        x = 0
    } else if (x > max) {
        x = max
    }
    if (y < min) {
        y = 0
    } else if (y > max) {
        y = max
    }
    oHover.style.left = x + 'px';
    oHover.style.top = y + 'px';
    /*
    * 根据比例求出放大区域
    * x/maxNum=?/rMaxNum
    * */
    var newLeft = x / max * -(oLarge.offsetWidth - oRight.offsetWidth);
    var newTop = y / max * -(oLarge.offsetHeight - oRight.offsetHeight);
    oLarge.style.left = newLeft + 'px';
    oLarge.style.top = newTop + 'px'
};