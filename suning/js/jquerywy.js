//jquery导航上面的效果
{

    $('document').ready(
        $('.dh-left-xiao').on('mouseenter', function () {
            $(this).children().eq(2).stop(true).animate({
                'height': '140',
                'display': 'block',
                'overflow': 'hidden'
            }, 200)
        }).on('mouseleave', function () {
            $(this).children().eq(2).stop(true).animate({'height': '0'}, 200)
        }),
        $('.daohang-right-djk').on('mouseenter', function () {
            $(this).children().eq(2).stop(true).animate({
                'height': '140',
                'display': 'block',
                'overflow': 'hidden'
            }, 200)
        }).on('mouseleave', function () {
            $(this).children().eq(2).stop(true).animate({'height': '0'}, 200)
        })
    )

}
// jquery侧导航
{

    let fiexd = $(".fixed ul li.si");
    fiexd.mouseenter(function () {
        $(this).addClass("active");
        $(this).children().children(".block").stop(true).animate({left: -47}, 500)
    })
    fiexd.mouseleave(function () {
        $(this).removeClass("active");
        $(this).children().children(".block").stop(true).animate({left: 0}, 500);
    });
    let three = $(".fixed ul li.san");
    three.mouseenter(function () {
        $(this).addClass("active");
        $(this).children().children(".block1").stop(true).animate({left: -75}, 500);
    });
    three.mouseleave(function () {
        $(this).removeClass("active");
        $(this).children().children(".block1").stop(true).animate({left: 0}, 500);
    });

}
//轮播图
{
    let imgs = $(".imgs-box li");
    let pages = $(".lunbo-box li");
    let banner = $(".banner-center");
    // 自动轮播
    let n = 0;

    function bannerfn(dir = "r") {
        if (dir === "r") {
            n++;
            if (n === imgs.length) {
                n = 0;
            }
        } else if (dir === "l") {
            n--;
            if (n === -1) {
                n = imgs.length - 1;
            }
        }
        // var index=$(this).index();
        pages.removeClass("active").eq(n).addClass("active");
        imgs.removeClass("active").eq(n).addClass("active");
    }

    let t = setInterval(bannerfn, 2000);
    banner.mouseover(function () {
        clearInterval(t);
    })
    banner.mouseout(function () {
        t = setInterval(bannerfn, 2000);
    })
    // 左右箭头
    let left = $(".banner-center .prev");
    let right = $(".banner-center .next");
    let flag = true;
    right.click(function () {
        if (flag) {
            flag = false;
            bannerfn();
        }
    })
    left.click(function () {
        if (flag) {
            flag = false;
            bannerfn("l");
        }
    })
    pages.click(function () {
        var index = $(this).index()
        pages.removeClass("active").eq(index).addClass("active");
        imgs.removeClass("active").eq(index).addClass("active");
        console.log(index);
        n = index;
    })
    imgs.on("transitionend", function () {
        flag = true;
    });


}
// 轮播图的选项卡
{
    let cc = document.querySelector(".lunboletf")
    let smxz = document.querySelectorAll(".lunbo .luobo-neikuan .lunboletf .luobo-neikuan-left li");
    let xmkz = document.querySelectorAll(".lunbo .luobo-neikuan .lunboletf .lefthz");
    smxz.forEach(function (val, index) {
        val.onmouseover = function () {
            xmkz.forEach(function (a, b) {
                a.classList.remove("active")
                smxz[b].classList.remove("active")
            })
            xmkz[index].classList.add("active")
            val.classList.add("active")
        }
        xmkz[index].onmouseover = function () {
            xmkz.forEach(function (a, b) {
                a.classList.remove("active")
                smxz[b].classList.remove("active")
            })
            xmkz[index].classList.add("active")
            val.classList.add("active")
        }
        val.onmouseout = function () {
            xmkz[index].classList.remove("active")
            val.classList.remove("active")
        }
        xmkz[index].onmouseout = function () {
            xmkz[index].classList.remove("active")
            val.classList.remove("active")
        }
    })
}
//大聚惠选项卡

// {
//     let sm = document.querySelectorAll(" .djh .djh1 .aa1")
//     let xm = document.querySelectorAll(" .djh .djhx .djh2")
//     sm.forEach(function (val, index) {
//         val.onmouseover = function () {
//             sm.forEach(function (a, b) {
//                 a.classList.remove("active")
//             })
//             val.classList.add("active")
//             xm.forEach(function (a, b) {
//                 a.classList.remove("active")
//             })
//             xm[index].classList.add("active")
//         }
//     })
// }

// 大聚惠轮播图
{
    let ul = $('.djh2 .djh-img1 .dhz1s')
    let zpan = $('.djh2 .djh-img1  .btn8-left')
    let ypan = $('.djh2 .djh-img1 .btn8-right')
    let n = 0;
    let b = 0;
    let num = true;
    function move() {
        b = n + 1;
        if (b == ul.length) {
            b = 0;
        }
        ul.eq(b).css('left', 1000)
        ul.eq(n).animate({left: -1000}, 1000, function () {
            ul.eq(n).css('left', 1000)
        })
        ul.eq(b).animate({left: 0}, 1000, function () {
            n = b
            num = true
        })
    }
    ypan.click(function () {
        if (num == true) {
            num = false
            move()
        }
    })
    zpan.click(function () {
        if (num == true) {
            num = false
            b = n - 1;
            if (b < 0) {
                b = ul.length - 1;
            }
            ul.eq(b).css('left', -1000)
            ul.eq(n).animate({left: 1000}, 1000, function () {
                ul.eq(n).css('left', -1000)
            })
            ul.eq(b).animate({left: 0}, 1000, function () {
                n = b
                num = true
            })
        }
    })
}
//返回
{
    let fh = document.querySelector(".aside-di-1")
    fh.onclick = function () {
        animate(document.body, {scrollTop: 0}, 500)
        animate(document.documentElement, {scrollTop: 0}, 500)
    }
}
//楼层跳转
{
    let yc = document.querySelector(".topbar")
    let lis = document.querySelectorAll(".lists");
    let xds = document.querySelectorAll(".aside-nei li");
    let leftbar = document.querySelector(".aside-nei");
    let flag = true;
    let cl = true;
    let hq = true;
    let he = document.documentElement.clientHeight;   // 当前窗口的高度
    window.onscroll = function () {                       //检测滚轮事件
        if (!flag) {
            return;
        }
        let pos = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;  //滚动条的高度
        if (pos > he) {
            if (cl) {
                cl = false
                animate(yc, {top: 0}, 500, function () {
                    hq = true;
                })
            }
        } else {
            if (hq) {
                hq = false;
                animate(yc, {top: -80}, 500, function () {
                    cl = true;
                })
            }
        }

        // console.log(pos)

        if (pos >= 2640) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }

        lis.forEach(function (val, index) {
            if (pos >= val.offsetTop - he + 600) {

                xds.forEach(function (a, b) {
                    a.classList.remove("active")
                })
                xds[index].classList.add("active")
            }
        })
    }

    xds.forEach(function (a, b) {
        let pos = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
        a.onclick = function () {
            flag = false
            let x = (lis[b].offsetTop) - 100;
            animate(document.body, {scrollTop: x}, 200)
            animate(document.documentElement, {scrollTop: x}, 200, function () {
                flag = true;
            })
        }
    })

}
// 排行榜
{
    let box = document.querySelector(".haohuo3");
    let imgs = document.querySelectorAll(".haohuo3 .content .list");
    let znn = document.querySelector(".haohuo3 .btn-left")
    let ynn = document.querySelector(".haohuo3 .btn-right")
    let lis = document.querySelectorAll(".haohuo3 .yuan a")
    let letf = parseInt(getComputedStyle(box, null)["width"]);
    let flag = true;
    let nom = 0;
    let next = 0;

    function move() {
        next = nom + 1;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].style.left = letf + "px";
        animate(imgs[nom], {left: -letf}, 1000)
        animate(imgs[next], {left: 0}, 800, function () {
            flag = true;
        })
        lis[nom].classList.remove("active")
        lis[next].classList.add("active")
        nom = next;
    }

    // let c= setInterval(move,2000)
    //
    // box.onmouseover=function () {
    //     clearInterval(c);
    // }
    // box.onmouseout=function () {
    //     c= setInterval(move,2000)
    // }
    ynn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false
        move();
    }
    znn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false
        next = nom - 1;
        if (next < 0) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = -letf + "px";
        animate(imgs[nom], {left: letf}, 800)
        animate(imgs[next], {left: 0}, 800, function () {
            flag = true
        })
        lis[nom].classList.remove("active")
        lis[next].classList.add("active")
        nom = next;
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            if (!flag) {
                return;
            }
            flag = false
            if (i > nom) {
                next = i;
                if (next == imgs.length) {
                    next = 0;
                }
                imgs[next].style.left = letf + "px";
                animate(imgs[nom], {left: -letf}, 800)
                animate(imgs[next], {left: 0}, 800, function () {
                    flag = true;
                })
                lis[nom].classList.remove("active")
                lis[next].classList.add("active")
                nom = next;
            } else if (i < nom) {
                next = i;
                if (next < i) {
                    next = imgs.length - 1;
                }
                imgs[next].style.left = -letf + "px";
                animate(imgs[nom], {left: letf}, 800)
                animate(imgs[next], {left: 0}, 800, function () {
                    flag = true;
                })
                lis[nom].classList.remove("active")
                lis[next].classList.add("active")
                nom = next;
            } else {
                flag = true;
            }

        }
    }

}
// 视频轮播图
{
    let ul = $('.shengxian-sp .small .splbt')
    let zpan = $('.shengxian-sp .small .jiantou-left')
    let ypan = $('.shengxian-sp .small .jiantou-right')
    let n = 0;
    let b = 0;
    let num = true;
    function move() {
        b = n + 1;
        if (b == ul.length) {
            b = 0;
        }
        ul.eq(b).css('left', 393)
        ul.eq(n).animate({left: -393}, 1000, function () {
            ul.eq(n).css('left', 393)
        })
        ul.eq(b).animate({left: 0}, 1000, function () {
            n = b
            num = true
        })
    }
    ypan.click(function () {
        if (num == true) {
            num = false
            move()
        }
    })
    zpan.click(function () {
        if (num == true) {
            num = false
            b = n - 1;
            if (b < 0) {
                b = ul.length - 1;
            }
            ul.eq(b).css('left', -393)
            ul.eq(n).animate({left: 393}, 1000, function () {
                ul.eq(n).css('left', -393)
            })
            ul.eq(b).animate({left: 0}, 1000, function () {
                n = b
                num = true
            })
        }
    })
}