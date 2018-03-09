$(function () {
    $('.content .title li').each(function () {
        $(this).mouseover(function () {
            let index=$(this).index();
            $('ul.neirong').each(function () {
                $(this).css({display:'none'})
            })
            $('.content .title a').each(function () {
                $(this).removeClass('active');
            })
            console.log($('.content .title a'));
            $(this).children('a').addClass('active');
            $(`ul.neirong:eq(${index})`).css({display:'block'});
        })
    })
//    banner
    $(function () {
        let now=0,next=0;
        let t=setInterval(recycleL,2000);
        let flag=true;

        $('.img-box .bashou').click(function () {
            if (!flag){
                return;
            }
            recycleR();
            flag=false;
        })
        $('.img-box .bashou1').click(function () {
            if (!flag){
                return;
            }
            recycleL();
            flag=false;
        })
        $('.img-box').mouseenter(function () {
            clearInterval(t);
        })
        $('.img-box').mouseleave(function () {
            clearInterval(t);
            t=setInterval(recycleL,2000);
        })
        function recycleL() {
            next++;
            if (next>=$('.img-box>li').length){
                next=0;
            }
            $(`.img-box>li:eq(${next})`).css({left:555})
            $(`.img-box>li:eq(${now})`).animate({left:-555},500,()=>{flag=true;});
            $(`.img-box>li:eq(${next})`).animate({left:0},500);
            $(`.anniu span:eq(${now})`).removeClass('active');
            $(`.anniu span:eq(${next})`).addClass('active');
            now=next;
        }
        function recycleR() {
            next--;
            if (next<0){
                next=$('.img-box>li').length-1;
            }
            $(`.img-box>li:eq(${next})`).css({left:-555})
            $(`.img-box>li:eq(${now})`).animate({left:555},500,()=>{flag=true;});
            $(`.img-box>li:eq(${next})`).animate({left:0},500);
            $(`.anniu span:eq(${now})`).removeClass('active');
            $(`.anniu span:eq(${next})`).addClass('active');
            now=next;
        }
        $(`.anniu span`).each(function () {
            if (!flag){
                return;
            }
            $(this).click(function () {
                if ($(this).index()<now){
                    $(`.img-box>li:eq(${$(this).index()})`).css({left:-555})
                    $(`.img-box>li:eq(${now})`).animate({left:555},500,()=>{flag=true;});
                    $(`.img-box>li:eq(${$(this).index()})`).animate({left:0},500);
                    $(`.anniu span`).each(function () {
                        $(this).removeClass('active');
                    })
                    $(`.anniu span:eq(${$(this).index()})`).addClass('active');
                }else if ($(this).index()>now){
                    $(`.img-box>li:eq(${$(this).index()})`).css({left:555})
                    $(`.img-box>li:eq(${now})`).animate({left:-555},500,()=>{flag=true;});
                    $(`.img-box>li:eq(${$(this).index()})`).animate({left:0},500);
                    $(`.anniu span`).each(function () {
                        $(this).removeClass('active');
                    })
                    $(`.anniu span:eq(${$(this).index()})`).addClass('active');
                }else{
                    return;
                }
                now=next=$(this).index();
            })
        })
    })
})