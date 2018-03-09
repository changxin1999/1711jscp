//轮播图
{
    let flag = true;
    let dhz = document.querySelector(" .luobo-neikuan");
    let imgs = document.querySelectorAll(".imgs-box li");
    let zan = document.querySelector(" .banner-center .prev");
    let yan = document.querySelector(" .banner-center .next");
    let li = document.querySelectorAll(".lunbo-box li")
    let n = 0;

    function move() {
        n++
        if (n == imgs.length) {
            n = 0;
        }
        imgs.forEach(function (a, b) {
            a.classList.remove("active")
            li[b].classList.remove("active")
        })
        imgs[n].classList.add("active")
        li[n].classList.add("active")
    }

    let sj1 = setInterval(move, 2000)

    dhz.onmouseover = function () {
        clearInterval(sj1)
    }
    dhz.onmouseout = function () {
        sj1 = setInterval(move, 2000)
    }
    yan.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        move();
    }
    zan.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        n--
        if (n < 0) {
            n = imgs.length - 1;
        }
        imgs.forEach(function (a, b) {
            a.classList.remove("active")
            li[b].classList.remove("active")
        })
        imgs[n].classList.add("active")
        li[n].classList.add("active")
    }
    li.forEach(function (val, index) {
        val.onclick = function () {
            if (!flag) {
                return;
            }
            flag = false;
            li.forEach(function (a1, a2) {
                a1.classList.remove("active")
                imgs[a2].classList.remove("active")
            })
            val.classList.add("active")
            imgs[index].classList.add("active")
            n = index
        }
    })
    imgs.forEach(function (val2) {
        val2.addEventListener("transitionend", function () {
            flag = true;
        })
    })


}
//轮播图的选项卡
{
    let cc=document.querySelector(".lunboletf")
    let smxz = document.querySelectorAll(".lunbo .luobo-neikuan .lunboletf .luobo-neikuan-left li");
    let xmkz = document.querySelectorAll(".lunbo .luobo-neikuan .lunboletf .lefthz");
    smxz.forEach(function (val,index) {
        val.onmouseover = function () {
            smxz.forEach(function (a, b) {
                a.classList.remove("active")
            })
            val.classList.add("active")
            xmkz.forEach(function (a, b) {
                a.classList.remove("active")
            })
            xmkz[index].classList.add("active")
        }
    })
    cc.onmouseout=function () {
        smxz.forEach(function (a, b) {
            a.classList.remove("active")
        })
        xmkz.forEach(function (a, b) {
            a.classList.remove("active")
        })
    }
}
//大聚惠选项卡
{
    let sm=document.querySelectorAll(" .djh .djh1 .aa1")
    let xm=document.querySelectorAll(" .djh .djhx .djh2")
    sm.forEach(function (val,index) {
        val.onmouseover=function () {
            sm.forEach(function (a,b) {
                a.classList.remove("active")
            })
            val.classList.add("active")
            xm.forEach(function (a,b) {
                a.classList.remove("active")
            })
            xm[index].classList.add("active")
        }
    })

    let box=document.querySelector(".djh .djhx")
    let znn=document.querySelector(".djh  .djh1 .more .left")
    let ynn=document.querySelector(".djh  .djh1 .more .right")
    let letf=parseInt(getComputedStyle(box,null)["width"]);
    let flag=true;
    let nom=0;
    let next=0;
    function move() {
        next=nom+1;
        if(next==xm.length){
            next=0;
        }
        xm[next].style.left=letf+"px";
        animate(xm[nom],{left:-letf},1000)
        animate(xm[next],{left:0},1000,function () {
            flag=true;
        })
        nom=next;
    }

    ynn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false
        move();
    }
    znn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false
        next=nom-1;
        if(next<0){
            next=xm.length-1;
        }
        xm[next].style.left=-letf+"px";
        animate(xm[nom],{left:letf},1000)
        animate(xm[next],{left:0},1000,function () {
            flag=true
        })
        nom=next;
    }



}
//返回
{
    let fh=document.querySelector(".aside-di-1")
    fh.onclick=function () {
        animate(document.body,{scrollTop:0},500)
        animate(document.documentElement,{scrollTop:0},500)
    }
}
//楼层跳转
{
    let lis=document.querySelectorAll(".lists");
    let xds=document.querySelectorAll(".aside-nei li");
    let yc=document.querySelector(".topbar")
    let flag=true;
    let cl=true;
    let hq=true;
    let he=document.documentElement.clientHeight;   // 当前窗口的高度
    window.onscroll=function () {                       //检测滚轮事件
        if(!flag){
            return;
        }
        let pos=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;  //滚动条的高度
        if(pos>he){
            if(cl){
                cl=false
                animate(yc,{top:0},500,function () {
                    hq=true;
                })
            }
        }else {
            if(hq){
                hq=false;
                animate(yc,{top:-80},500,function () {
                    cl=true;
                })
            }
        }

        lis.forEach(function (val,index) {
            if(pos>=val.offsetTop-he+600){
                xds.forEach(function (a,b) {
                    a.classList.remove("active")
                })
                xds[index].classList.add("active")
            }
        })
    }

    xds.forEach(function (a,b) {
        let pos=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
        a.onclick=function () {
            flag=false
            let x=(lis[b].offsetTop)-100;
            animate(document.body,{scrollTop:x},200)
            animate(document.documentElement,{scrollTop:x},200,function () {
                flag=true;
            })
        }
    })

}
// 排行榜
{
    let box=document.querySelector(".haohuo3");
    let imgs=document.querySelectorAll(".haohuo3 .content .list");
    let znn=document.querySelector(".haohuo3 .btn-left")
    let ynn=document.querySelector(".haohuo3 .btn-right")
    let lis=document.querySelectorAll(".haohuo3 .yuan a")
    let letf=parseInt(getComputedStyle(box,null)["width"]);
    let flag=true;
    let nom=0;
    let next=0;
    function move() {
        next=nom+1;
        if(next==imgs.length){
            next=0;
        }
        imgs[next].style.left=letf+"px";
        animate(imgs[nom],{left:-letf},1000)
        animate(imgs[next],{left:0},1000,function () {
            flag=true;
        })
        lis[nom].classList.remove("active")
        lis[next].classList.add("active")
        nom=next;
    }
    let c= setInterval(move,2000)

    box.onmouseover=function () {
        clearInterval(c);
    }
    box.onmouseout=function () {
        c= setInterval(move,2000)
    }
    ynn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false
        move();
    }
    znn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false
        next=nom-1;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-letf+"px";
        animate(imgs[nom],{left:letf},1000)
        animate(imgs[next],{left:0},1000,function () {
            flag=true
        })
        lis[nom].classList.remove("active")
        lis[next].classList.add("active")
        nom=next;
    }

    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            if(!flag){
                return;
            }
            flag=false
            if(i>nom){
                next=i;
                if(next==imgs.length){
                    next=0;
                }
                imgs[next].style.left=letf+"px";
                animate(imgs[nom],{left:-letf},1000)
                animate(imgs[next],{left:0},1000,function () {
                    flag=true;
                })
                lis[nom].classList.remove("active")
                lis[next].classList.add("active")
                nom=next;
            }else if(i<nom){
                next=i;
                if(next<i){
                    next=imgs.length-1;
                }
                imgs[next].style.left=-letf+"px";
                animate(imgs[nom],{left:letf},1000)
                animate(imgs[next],{left:0},1000,function () {
                    flag=true;
                })
                lis[nom].classList.remove("active")
                lis[next].classList.add("active")
                nom=next;
            }else {
                flag=true;
            }

        }
    }

}
//轮播图 2
{
    let dom1=document.querySelectorAll(".imgs-box li");
    let don=document.querySelector(".banner-center");
    let dian=document.querySelectorAll(".lunbo-box li");
    let left1=document.querySelector(".prev");
    let right1=document.querySelector(".next");
    let n=0;
    let flag1=true;
    function dom() {
        n++;
        if(n===dom1.length){
            n=0;
        }
        dom1.forEach(function (val,index) {
            animate(val,{opacity: 0},500);
            dian[index].classList.remove("active")
        });
        animate(dom1[n],{opacity: 1},500,function () {
            flag1=true;
        });
        dian[n].classList.add("active")
    }
    let sj=setInterval(dom,2000);
    don.onmouseenter=function () {
        clearInterval(sj)
    };
    don.onmouseleave=function () {
        sj=setInterval(dom,2000);
    };
    left1.onclick=function () {
        if(!flag1){
            return
        }
        flag1=false;
        n--;
        if(n===-1){
            n=dom1.length-1;
        }
        dom1.forEach(function (val,index) {
            animate(val,{opacity: 0},500);
            dian[index].classList.remove("active")
        });
        animate(dom1[n],{opacity: 1},500,function () {
            flag1=true;
        });
        dian[n].classList.add("active")
    };
    right1.onclick=function () {
        if(!flag1){
            return
        }
        flag1=false;
        dom();
    };
    dian.forEach(function (v,i) {
        v.onclick=function () {
            if(!flag1){
                return
            }
            flag1=false;
            dian.forEach(function (va,ion) {
                va.classList.remove("active");
                animate(dom1[ion],{opacity: 0},500);
            });
            v.classList.add("active");
            animate(dom1[i],{opacity: 1},500,function () {
                flag1=true;
            });
            n=i;
        }
    })

}
