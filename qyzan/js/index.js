/*
* @Author: Administrator
* @Date:   2017-11-13 08:47:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-22 22:25:08
*/
window.onload=function(){
	let banner=document.querySelector('.banner');
	let banner_list=document.querySelector('.banner-list');
	let banner_li=banner_list.querySelectorAll('.banner-list>li');
	let num=0;
	let tt=setInterval(fn1, 3000);
	let xiaoyuan=document.querySelectorAll('.anniu .xiaoyuan');
	let bashou_zuo=document.querySelector('.bashou');
	let bashou_you=document.querySelector('.bashou1');
	bashou_zuo.onclick=function(){
		fn2();
	}
	bashou_you.onclick=function(){
		fn1();
	}
	banner.onmouseenter=function(){
		clearInterval(tt);
	}
	banner.onmouseleave=function(){
		clearInterval(tt);
		tt=setInterval(fn1, 3000)
	}
	function fn1(){
		num++;
		if (num>=banner_li.length) {
			num=0;
		}
		banner_li.forEach(function(value,index){
           value.style.opacity='0';
		})
		anniu();
		banner_li[num].style.opacity='1';
		// animate(banner_li[num],{opacity:1},1000)
	}
	function fn2(){
		num--;
		if (num<0) {
			num=banner_li.length-1;
		}
		banner_li.forEach(function(value,index){
           value.style.opacity='0';
		})
		banner_li[num].style.opacity='1';
		anniu();
		// animate(banner_li[num],{opacity:1},1000);
	}
    function anniu(){
    	xiaoyuan.forEach(function(value,index){
           value.classList.remove('dot');
    	})
    	xiaoyuan[num].classList.add('dot');
    }

}
$(function () {
	let scrollObj=document.body.scrollTop?document.body:document.documentElement;
	$('.top-xs').click(function () {
		$(scrollObj).animate({scrollTop:0},1000);
    })
})