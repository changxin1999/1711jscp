//轮播图上面的效果
{
    let wzbox=document.querySelector(".daohangwenzikj")
    let ycbox=document.querySelector(".dbxhz")

    let wz=document.querySelectorAll(".daohangwenzi")
    let yc=document.querySelectorAll(".dbxhznk")

    wzbox.onmouseover=function () {
        ycbox.classList.add("active")
    }
    wzbox.onmouseout=function () {
        ycbox.classList.remove("active")
    }
    wz.forEach(function (val,index) {
        val.onmouseover=function () {
            val.classList.add("active")
            yc[index].classList.add("active")
        }
        val.onmouseout=function () {
            val.classList.remove("active")
            yc[index].classList.remove("active")
        }
        yc[index].onmouseover=function () {
            val.classList.add("active")
            yc[index].classList.add("active")
        }
        yc[index].onmouseout=function () {
            val.classList.remove("active")
            yc[index].classList.remove("active")
        }
    })

}
//轮播图
{
    let ban = $(".banner");
    let banimg = $(".banner .imgs");
    let btn = $(".banner .banner-lunbodian .banner-lunbodian-1");
    let left = $('.banner .banner-qiehuan');
    let right = $('.banner .banner-qiehuan1');
    let t = 0;
    function name() {
        t++;
        if (t == banimg.length) {
            t = 0;
        }
        banimg.each(function (i) {
            $(banimg).removeClass("active");
            $(btn).removeClass("active");
        });
        $(banimg[t]).addClass("active");
        $(btn[t]).addClass("active");
    }
    let time = setInterval(name,3000);
    let flag = true;
    ban.mouseover(function () {
        clearInterval(time);
    });
    ban.mouseout(function () {
        time = setInterval(name, 3000);
    });
    right.click(function () {
        // if(!flag){
        //     return;
        // }
        // flag = false;
        name()
    });
    left.click (function () {
        t--;
        if (t < 0) {
            t = banimg.length-1;
        }
        banimg.each(function (i) {
            $(banimg).removeClass("active");
            $(btn).removeClass("active");
        });
        $(banimg[t]).addClass("active");
        $(btn[t]).addClass("active");
    });
    btn.each(function (index,val) {
        // console.log($(val));
        $(val).click(function () {
            // if(!flag){
            //     return;
            // }
            // flag = false;
            btn.each(function (va,id) {
                $(id).removeClass("active");
                $(banimg[va]).removeClass("active");
            });
            $(btn[index]).addClass("active");
            $(banimg[index]).addClass("active");
            t = index;
        })
    });


}
//banner 选项卡
{
    $('.banerleft .banner-left .banner-neikuan-list-box').mouseenter(function () {
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.banerleft .lefthz').css('display','none').eq($(this).index()).css('display','block')
    })
    $('.banerleft .banner-left').mouseleave(function () {
        $('.banerleft .lefthz').hide(0);
        $('.banerleft .banner-left .banner-neikuan-list-box').removeClass('active')
    })
}

//明星单品滑动
{
    let num = 1;
    let dpPrevObj = document.querySelector(".danpin-anniu .prev");
    let dpNextObj = document.querySelector(".danpin-anniu .next");
    let dpContainer = document.querySelector("#danpin .container");
    let dpSt = setInterval(dpFn, 2000);

    function dpArrowOut() {
        dpSt = setInterval(dpFn, 2000);
    }

    function dpArrowIn() {
        clearInterval(dpSt);
    }

    function dpNext() {
        dpNextObj.classList.remove("selected");
        dpPrevObj.classList.add("selected");
        dpContainer.style.marginLeft = "-1226px";
        num = 0;
    }

    function dpPrev() {
        dpNextObj.classList.add("selected");
        dpPrevObj.classList.remove("selected");
        dpContainer.style.marginLeft = "0";
        num = 1;
    }

    function dpFn() {
        num++;
        if (num % 2 === 0) {
            dpNext();
        } else {
            dpPrev();
        }
    };
    dpNextObj.onclick = dpNext;
    dpNextObj.onmouseover = dpArrowIn;
    dpNextObj.onmouseout = dpArrowOut;
    dpPrevObj.onclick = dpPrev;
    dpPrevObj.onmouseover = dpArrowIn;
    dpPrevObj.onmouseout = dpArrowOut;
}
// 商品分类选项卡
{
    let fenlei = document.querySelectorAll(".fenlei");

    function xuanxiangka(val) {
        let fenleiTop = val.querySelectorAll(".fenlei-top-fenlei a");
        let fenleiBot = val.querySelectorAll(".fenlei-bottom .bottom-right");
        fenleiTop.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (let i = 0; i < fenleiTop.length; i++) {
                    fenleiTop[i].classList.remove("active");
                    fenleiBot[i].style.display = "none";
                }
                ele.classList.add("active");
                fenleiBot[index].style.display = "block";
            }
        });
    }

    for (let i = 0; i < fenlei.length; i++) {
        xuanxiangka(fenlei[i]);
    }
}
// 内容滑动
{
    let neirongs = document.querySelectorAll(".neirong-inner");

    function neirongFn(par) {
        let dots = par.querySelectorAll(".neirong-dots span");
        let container = par.querySelector("#neirong .container ");
        let nrArrowPrev = par.querySelector(".neirong-prev");
        let nrArrowNext = par.querySelector(".neirong-next");
        let num = 0;

        function nrFn(ele, index) {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("selected");
            }
            ele.classList.add("selected");
            container.style.marginLeft = -296 * index + "px";
        }

        function nrArrow(dir = "r") {
            if (dir === "r") {
                num++;
                if (num === dots.length) {
                    num = dots.length - 1;
                }
            } else {
                num--;
                if (num === -1) {
                    num = 0;
                }
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("selected");
            }
            dots[num].classList.add("selected");
            container.style.marginLeft = -296 * num + "px";
        }

        dots.forEach(function (ele, index) {
            ele.onclick = function () {
                nrFn(ele, index);
                num = index;
            };
        });
        nrArrowNext.onclick = function () {
            nrArrow();
        };
        nrArrowPrev.onclick = function () {
            nrArrow("l");
        }


    }

    for (let i = 0; i < neirongs.length; i++) {
        neirongFn(neirongs[i]);
        // console.log(neirongs[i])
    }
}
// 推荐滑动
{
    let num = 1;
    let tjPrevObj = document.querySelector(".tuijian-anniu .prev");
    let tjNextObj = document.querySelector(".tuijian-anniu .next");
    let tjContainer = document.querySelector("#tuijian .container");
    let tjInner = document.querySelectorAll("#tuijian .container .tuijian-right");

    function tjNext() {
        if (num < tjInner.length / 5) {
            num++;
            tjPrevObj.classList.add("selected");
            if (num == tjInner.length / 5) {
                tjNextObj.classList.remove("selected");
            }
        }
        tjContainer.style.marginLeft = -1240 * (num - 1) + "px";
    }

    function tjPrev() {
        if (num > 1) {
            num--;
            tjNextObj.classList.add("selected");
            if (num == 1) {
                tjPrevObj.classList.remove("selected");
            }
        }
        tjContainer.style.marginLeft = -1240 * (num - 1) + "px";
    }

    tjNextObj.onclick = tjNext;

    tjPrevObj.onclick = tjPrev;

}