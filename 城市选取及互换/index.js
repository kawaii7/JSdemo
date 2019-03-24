var btn = document.getElementsByClassName('btn')[0];
var spans = document.getElementsByTagName('span');
var spanArr = Array.prototype.slice.call(spans);
var card = document.getElementsByClassName('card')[0];
var oReturn = document.getElementsByClassName('return')[0];
var ul = document.getElementsByTagName('ul')[0];
var activeDom;
var angle = 0;
btn.onclick = function () {
    angle += 180;
    this.style.transform = 'rotateZ(' + angle + 'deg)';
    spanArr.forEach((ele, index) => {
        /*if (ele.className === 'state1') {
            ele.className = 'state2'
        } else {
            ele.className = 'state1'
        }*/
        ele.className = ele.className === 'state1' ? 'state2' : "state1";

    })
};

spanArr.forEach((ele, index) => {
    ele.onclick = () => {
        card.style.left = 0;
        activeDom = ele;
    }
});
oReturn.onclick = () => {
    card.style.left = '100%'
};
/*事件委托*/
ul.addEventListener('click', function (e) {
    var target = e.target; //事件源对象
    if (target.nodeName !== 'LI') return;
    activeDom.innerText = target.innerText;
    oReturn.onclick()
});