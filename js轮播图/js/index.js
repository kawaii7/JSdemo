// function banner() {
var width = document.body.offsetWidth;//获取界面宽度
var moveUl = document.querySelector('.banner_images');//获取图片列表
document.querySelector(".banner_images li img").style.height = width / 2.75 + "px";//根据界面宽度动态修改图片高度
var linum = 0;
for (var j = 1; j <= document.querySelectorAll(".banner_images li").length - 1; j++) {
    document.querySelector(".banner_index-frame").appendChild(document.createElement("li"));
    document.querySelectorAll(".banner_images li img")[j].style.height = width / 2.75 + "px";
    linum++
}
var indexLiArr = document.querySelectorAll('.banner_index li');//获取小圆点
var Ul = document.querySelector('.train_banner');//获取整个div
var left = document.querySelector('.train_banner_left');//左箭头
var right = document.querySelector('.train_banner_right');//右箭头
var index = 0;
var startTransition = function () {
    moveUl.style.transition = 'all .5s';
};
var endTransition = function () {
    moveUl.style.transition = '';
};
var setTransform = function (distance) {
    moveUl.style.transform = 'translateX(' + distance + 'px)';//设置动画函数
};
var timeId = setInterval(function () {
    index++;//每一次计数器++
    if (index >= document.querySelectorAll(".banner_images li").length) {
        index = 0//如果计数器等于最后一张图片,重新回到第一张
    }
    startTransition();//过渡效果
    setTransform(index * width * -1);//向右移动
}, 3000);

function li() {
    for (var i = 0; i < indexLiArr.length; i++) {
        indexLiArr[i].index = i;
        indexLiArr[i].onclick = function () {
            for (var i = 0; i < indexLiArr.length; i++) {
                indexLiArr[i].className = '';
            }
            indexLiArr[this.index].className = 'current';//点击圆点添加样式
            clearInterval(timeId);//清除定时器
            endTransition();//清除过渡
            index = this.index;
            setTransform((this.index) * width * -1);
            startTransition();
            timeId = setInterval(function () {
                index++;
                if (index >= document.querySelectorAll(".banner_images li").length) {
                    index = 0
                }
                startTransition();
                setTransform(index * width * -1);
            }, 3000)
        };
    }
}

li();
left.addEventListener('click', function () {
    clearInterval(timeId);
    startTransition();
    index--;
    if (index < 0) {
        index = document.querySelectorAll(".banner_images li").length - 1;
        setTransform(index * width * -1);
    } else {
        setTransform(index * width * -1);
    }
    for (var i = 0; i < indexLiArr.length; i++) {
        indexLiArr[i].className = '';
    }
    indexLiArr[index].className = 'current';
    timeId = setInterval(function () {
        index++;
        if (index >= document.querySelectorAll(".banner_images li").length) {
            index = 0
        }
        startTransition();
        setTransform(index * width * -1);
    }, 3000)
});
right.addEventListener('click', function () {
    clearInterval(timeId);
    startTransition();
    index++;
    if (index >= document.querySelectorAll(".banner_images li").length) {
        index = 0;
        setTransform(index * width * -1);
    } else {
        setTransform(index * width * -1);
    }
    for (var i = 0; i < indexLiArr.length; i++) {
        indexLiArr[i].className = '';
    }
    indexLiArr[index].className = 'current';
    timeId = setInterval(function () {
        index++;
        if (index >= document.querySelectorAll(".banner_images li").length) {
            index = 0
        }
        startTransition();
        setTransform(index * width * -1);
    }, 3000)
});
moveUl.addEventListener('webkitTransitionEnd', function () {
    if (index >= document.querySelectorAll(".banner_images li").length) {
        index = 0;
        endTransition();
        setTransform(index * width * -1);
    } else if (index < 0) {
        index = document.querySelectorAll(".banner_images li").length - 1;
        endTransition();
        setTransform(index * width * -1);
    }
    for (var i = 0; i < indexLiArr.length; i++) {
        indexLiArr[i].className = '';
    }
    indexLiArr[index].className = 'current';
});
window.onresize = function () {
    endTransition();
    clearInterval(timeId);
    width = document.documentElement.clientWidth;
    document.querySelector(".banner_images li img").style.height = width / 2.75 + "px"
    for (var j = 1; j <= document.querySelectorAll(".banner_images li").length - 1; j++) {
        document.querySelectorAll(".banner_images li img")[j].style.height = width / 2.75 + "px"
    }
    setTransform(index * width * -1);
    timeId = setInterval(function () {
        index++;
        if (index >= document.querySelectorAll(".banner_images li").length) {
            index = 0
        }
        startTransition();
        setTransform(index * width * -1);
    }, 3000)
};
var start = 0;
var tform = 0;

function handlerTouchEvent(event) {
    if (event.touches.length === 1 || event.touches.length === 0) {
        switch (event.type) {
            case "touchstart":
                endTransition();
                clearInterval(timeId);
                start = event.touches[0].clientX
                break;
            case "touchend":
                if (start - event.changedTouches[0].clientX >= width / 2) {
                    if (index >= document.querySelectorAll(".banner_images li").length - 1) {
                        index = 0
                    } else {
                        index++
                    }
                    setTransform(index * width * -1);
                } else {
                    setTransform(index * width * -1);
                }
                if (event.changedTouches[0].clientX - start >= width / 2) {
                    if (index <= 0) {
                        index = document.querySelectorAll(".banner_images li").length - 1
                    } else {
                        index--
                    }
                    setTransform(index * width * -1);
                } else {
                    setTransform(index * width * -1);
                }
                startTransition();
                timeId = setInterval(function () {
                    index++;
                    if (index >= document.querySelectorAll(".banner_images li").length) {
                        index = 0
                    }
                    startTransition();
                    setTransform(index * width * -1);
                }, 5000);
                break;
            case "touchmove":
                event.preventDefault();
                tform = index * width * -1 - (start - event.changedTouches[0].clientX)
                if (tform >= 0) {
                    tform = 0
                }
                if (tform <= -linum * width) {
                    tform = -linum * width
                }
                setTransform(tform);
        }
    }
}

moveUl.addEventListener('touchstart', handlerTouchEvent, false);
moveUl.addEventListener('touchmove', handlerTouchEvent, false);
moveUl.addEventListener('touchend', handlerTouchEvent, false);
// }