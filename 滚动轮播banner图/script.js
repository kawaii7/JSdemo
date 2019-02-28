var slidebox = document.getElementsByClassName("slidebox")[0];
var images = slidebox.getElementsByTagName("li");
var font = document.getElementsByClassName("slidelist")[0].getElementsByTagName("li");
var mask = document.getElementsByClassName("mask")[0];
var slidetitle = document.getElementsByClassName("slidetitle")[0].firstElementChild;


function banner() {
    for (var i = 0; i < font.length; i++) {
        images[0].style.zIndex = 2;
        images[0].style.display = "block";
        images[0].style.opacity = 1;
        (function (j) {
            font[j].addEventListener("mouseover", function () {
                mask.style.top = (46 * j) + 5 + "px";
                for (var i = 0; i < images.length; i++) {
                    images[i].style.zIndex = 0;
                    images[i].style.display = "none";
                    images[i].style.opacity = 0;
                }
                images[j].style.zIndex = 2;
                images[j].style.display = "block";
                images[j].style.opacity = 1;

                slidetitle.innerHTML = "Picture information" + (j + 1);
                clearInterval(setTime);
            }, false);
            font[j].addEventListener("mouseout", function () {
                Timer2(j);
            }, false);
        }(i));
    }

    function Timer1() {
        var index = 0;
        slidetitle.innerHTML = "Picture information1";
        setTime = setInterval(function () {
            index++;
            if (index === images.length) {
                index = 0;
                for (var i = 0; i < images.length; i++) {
                    images[i].style.zIndex = 0;
                    images[i].style.display = "none";
                    images[i].style.opacity = 0;
                    images[0].style.zIndex = 2;
                    images[0].style.display = "block";
                    images[0].style.opacity = 1;
                }
            }
            images[index].style.zIndex = 2;
            images[index].style.display = "block";
            images[index].style.opacity = 1;
            mask.style.top = (46 * index) + 5 + "px";
            slidetitle.innerHTML = "Picture information" + (index + 1);
        }, 2000);
    }

    Timer1();

    function Timer2(j) {
        var index = j;
        slidetitle.innerHTML = "Picture information" + (index + 1);
        setTime = setInterval(function () {
            index++;
            if (index === images.length) {
                index = 0;
                for (var i = 0; i < images.length; i++) {
                    images[i].style.zIndex = 0;
                    images[i].style.display = "none";
                    images[i].style.opacity = 0;
                    images[index].style.zIndex = 2;
                    images[index].style.display = "block";
                    images[index].style.opacity = 1;
                }
            }
            images[index].style.zIndex = 2;
            images[index].style.display = "block";
            images[index].style.opacity = 1;
            mask.style.top = (46 * index) + 5 + "px";
            slidetitle.innerHTML = "Picture information" + (index + 1);
        }, 2000);
    }

}

banner();