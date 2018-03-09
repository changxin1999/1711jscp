$(function () {
    let now=0,next=0;
    let t=setInterval(recycleL,2000);
    let flag=true;

    $('.remen .img-box').mouseenter(function () {
        clearInterval(t);
    })
    $('.remen .img-box').mouseleave(function () {
        clearInterval(t);
        t=setInterval(recycleL,2000);
    })
    function recycleL() {
        console.log($('.remen .img-box>img').length)
        next++;
        if (next>=$('.remen .img-box>img').length){
            next=0;
        }
        $(`.remen .img-box>img:eq(${next})`).css({left:262.5})
        $(`.remen .img-box>img:eq(${now})`).animate({left:-262.5},500,()=>{flag=true;});
        $(`.remen .img-box>img:eq(${next})`).animate({left:0},500);
        $(`.xiaoyuan span:eq(${now})`).removeClass('active');
        $(`.xiaoyuan span:eq(${next})`).addClass('active');
        now=next;
    }
    function recycleR() {
        next--;
        if (next<0){
            next=$('.remen .img-box>img').length-1;
        }
        $(`.remen .img-box>img:eq(${next})`).css({left:-262.5})
        $(`.remen .img-box>img:eq(${now})`).animate({left:262.5},500,()=>{flag=true;});
        $(`.remen .img-box>img:eq(${next})`).animate({left:0},500);
        $(`.xiaoyuan span:eq(${now})`).removeClass('active');
        $(`.xiaoyuan span:eq(${next})`).addClass('active');
        now=next;
    }
    $(`.xiaoyuan span`).each(function () {
        if (!flag){
            return;
        }
        $(this).click(function () {
            if ($(this).index()<now){
                $(`.remen .img-box>img:eq(${$(this).index()})`).css({left:-262.5})
                $(`.remen .img-box>img:eq(${now})`).animate({left:262.5},500,()=>{flag=true;});
                $(`.remen .img-box>img:eq(${$(this).index()})`).animate({left:0},500);
                $(`.xiaoyuan span`).each(function () {
                    $(this).removeClass('active');
                })
                $(`.xiaoyuan span:eq(${$(this).index()})`).addClass('active');
            }else if ($(this).index()>now){
                $(`.remen .img-box>img:eq(${$(this).index()})`).css({left:262.5})
                $(`.remen .img-box>img:eq(${now})`).animate({left:-262.5},500,()=>{flag=true;});
                $(`.remen .img-box>img:eq(${$(this).index()})`).animate({left:0},500);
                $(`.xiaoyuan span`).each(function () {
                    $(this).removeClass('active');
                })
                $(`.xiaoyuan span:eq(${$(this).index()})`).addClass('active');
            }else{
                return;
            }
            now=next=$(this).index();
        })
    })
})