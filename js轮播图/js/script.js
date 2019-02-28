var width = document.body.offsetWidth;//界面宽度
var imgList = document.getElementsByClassName("banner_images")[0].getElementsByTagName("li");//轮播图列表
// imgList[0].getElementsByTagName("img")[0].style.height = width / 2.75 + "px";
for (var i = 0; i < imgList.length; i++) {
    document.getElementsByClassName("banner_index-frame")[0].appendChild(document.createElement("li"));
    imgList[i].getElementsByTagName("img")[0].style.height = width / 2.75 + "px";
}
var indexList = document.getElementsByClassName("banner_index-frame")[0].getElementsByTagName("li");//小圆点列表
indexList[0].parentNode.removeChild(indexList[0].parentNode.lastChild);
var left = document.getElementsByClassName("train_banner_left")[0];//左箭头
var right = document.getElementsByClassName("train_banner_right")[0];//右箭头
var index = 0;//计数器

var setTransform = function (distance) {
    document.getElementsByClassName("banner_images")[0].style.transform = "translateX(" + distance + "px)";//动画函数
};

function setTime() {
    timeId = setInterval(function () {
        index++;//每一次计数器++
        if (index === imgList.length) {
            index = 0;//如果计数器等于最后一张图,计数器回到0;
        }
        setTransform(index * width * -1);//定时向右轮播index*每张图片宽度的距离
        for (var i = 0; i < indexList.length; i++) {
            indexList[i].className = "";
        }
        indexList[index].className = "current";
    }, 3000);
}

setTime();

function liList() {
    for (var i = 0; i < indexList.length; i++) {
        (function (j) {
            indexList[j].onclick = function () {
                for (var i = 0; i < indexList.length; i++) {
                    indexList[i].className = "";
                }
                indexList[j].className = "current";
                setTransform(j * width * -1);
                clearInterval(timeId);
                index = j;
                setTime()
            };
        }(i))
    }
}

liList();

left.addEventListener("click", function () {
    clearInterval(timeId);
    index--;
    if (index < 0) {
        index = indexList.length - 1;
        setTransform(index * width * -1);
    } else {
        setTransform(index * width * -1);
    }
    for (var i = 0; i < indexList.length; i++) {
        indexList[i].className = "";
    }
    indexList[index].className = "current";
    setTime()

}, false);

right.addEventListener("click", function () {
    clearInterval(timeId);
    index++;
    if (index > indexList.length - 1) {
        index = 0;
        setTransform(index * width * -1);
    }
    setTransform(index * width * -1);

    for (var i = 0; i < indexList.length; i++) {
        indexList[i].className = "";
    }
    indexList[index].className = "current";
    setTime()
}, false);

window.onresize = function () {
    clearInterval(timeId);
    width = document.documentElement.clientWidth;
    for (var i = 0; i < imgList.length; i++) {
        imgList[i].getElementsByTagName("img")[0].style.height = width / 2.75 + "px";
    }
    setTransform(index * width * -1);
    setTime();
};