// function banner() {
var width = document.body.offsetWidth;//��ȡ������
var moveUl = document.querySelector('.banner_images');//��ȡͼƬ�б�
document.querySelector(".banner_images li img").style.height = width / 2.75 + "px";//���ݽ����ȶ�̬�޸�ͼƬ�߶�
var linum = 0;
for (var j = 1; j <= document.querySelectorAll(".banner_images li").length - 1; j++) {
    document.querySelector(".banner_index-frame").appendChild(document.createElement("li"));
    document.querySelectorAll(".banner_images li img")[j].style.height = width / 2.75 + "px";
    linum++
}
var indexLiArr = document.querySelectorAll('.banner_index li');//��ȡСԲ��
var Ul = document.querySelector('.train_banner');//��ȡ����div
var left = document.querySelector('.train_banner_left');//���ͷ
var right = document.querySelector('.train_banner_right');//�Ҽ�ͷ
var index = 0;
var startTransition = function () {
    moveUl.style.transition = 'all .5s';
};
var endTransition = function () {
    moveUl.style.transition = '';
};
var setTransform = function (distance) {
    moveUl.style.transform = 'translateX(' + distance + 'px)';//���ö�������
};
var timeId = setInterval(function () {
    index++;//ÿһ�μ�����++
    if (index >= document.querySelectorAll(".banner_images li").length) {
        index = 0//����������������һ��ͼƬ,���»ص���һ��
    }
    startTransition();//����Ч��
    setTransform(index * width * -1);//�����ƶ�
}, 3000);

function li() {
    for (var i = 0; i < indexLiArr.length; i++) {
        indexLiArr[i].index = i;
        indexLiArr[i].onclick = function () {
            for (var i = 0; i < indexLiArr.length; i++) {
                indexLiArr[i].className = '';
            }
            indexLiArr[this.index].className = 'current';//���Բ�������ʽ
            clearInterval(timeId);//�����ʱ��
            endTransition();//�������
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