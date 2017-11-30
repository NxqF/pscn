$(function(){
	var sectionwidth=$("section").width();
	var bodyheight=$("body").height();
	var sectionheight=$("section").height();
	var headerheight=$('header').height();
	var articleheight=$('article').height();
	var footerheight=$('footer').height();
	var pagetop=$('.page-top').height();
	var uiheadera=$('.ui-header-a').height();
	var tobuyitem=$('.to-buy-item').height();
	$('.to-buy-item').height(bodyheight-uiheadera);
	$('.articleh').height(bodyheight-headerheight-footerheight*0.2);
	$('.paixu').height(bodyheight-headerheight-pagetop);
	$('section').height(bodyheight);
	$('article').height(bodyheight-headerheight-footerheight);
})
$(function(){
	$('.ui-top-cont').click(function(){
		$('#back').css("display",'block')
	})
})
$(function(){
	var z=0;
	var x=0;
	var y=0;
	var yx=0;
	$('.user1').click(function(){
		$('.user1').val('')
	})
	$('.user2').click(function(){
		var us=$('.user1').val();
		if(us=='xqf'){
			alert('yes sir');
			$('#back').fadeOut(2000);
			$('.ui-click-login').text('你好，xqf')
			x=1
		}else{
			alert('可输入“xqf”')
		}
	})
	$('#gift1').click(function(){
		if(z==0&&x==1){
			alert('已领取2张优惠券');
			$('#youhui').text(2);
			$('article').eq(3).css('display','block').siblings('article').css('display','none');
			$('li.touch').eq(3).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
			z=1;
		}else if(z==1){
			alert('您已经领过了');
		}else if(x==0){
			alert('您还未登录');
		}
	})
	$('#gift2').click(function(){
		if(y==0&&x==1){
			alert('50元宝已入袋');
			$('#yuanbao').text(50);
			$('article').eq(3).css('display','block').siblings('article').css('display','none');
			$('li.touch').eq(3).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
			y=1;
		}else if(y==1){
			alert('您已经领过了');
		}else if(x==0){
			alert('您还未登录');
		}
	})
	var buyc=new Array();
	var mybuy=new Array(8);
	mybuy=[0,1,2,3,4,5,6,7]
	var q=0;
	$('.au-co1').click(function(){
		if(x==1){
			var buy= $('.au-co1').index(this);
			function removeByValue(arr,val) {
			  for(var i=0; i<arr.length; i++) {
			    if(arr[i] == val) {
			      arr.splice(i, 1);
			      break;
			    }
			}
		}
		removeByValue(mybuy,buy);
		buyc.push(buy);
		$('.buy-item').eq(buy).css('display','none');
		yx+=1;
		$('#youxiku').text(yx);
		}else if(x==0){
			alert('您还未登录');
		}
	})
	$todo=$('.article3-todo li')
	$todo.click(function(){
		$('li.touch1').eq($todo.index(this)).css('color','red').siblings('li.touch1').css('color','');
			$('li.touch1').eq($todo.index(this)).css('border-bottom','0.04rem solid #ff0000')
			.siblings('li.touch1').css('border-bottom','');
			if(q==0){
				for(g=0;g<mybuy.length;g++){
				$('.buy-item').eq(mybuy[g]).css('display','none');
				}
				for(f=0;f<buyc.length;f++){
					$('.buy-item').eq(buyc[f]).css('display','block');
				}
				$('.buy-item-c').css('display','none')
				q=1;
			}else if(q==1){
				for(g=0;g<mybuy.length;g++){
				$('.buy-item').eq(mybuy[g]).css('display','block');
				}
				for(f=0;f<buyc.length;f++){
					$('.buy-item').eq(buyc[f]).css('display','none');
				}
				$('.buy-item-c').css('display','block')
				q=0;
			}
	})
	$(".wi-hot-item").click(function(){
		if(x==1){
			alert('已加入游戏库');
			$(this).hide();
			yx+=1;
		$('#youxiku').text(yx);
		}else if(x==0){
			alert('您还未登录');
		}
	});
})
$(function(){
	$abc=$('.bottom-flex-wrap li')
	var b=0;
	var x=4;
	$abc.click(function(){
		$('article').eq($abc.index(this)).css('display','block').siblings('article').css('display','none')
		$('li.touch').eq($abc.index(this)).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
		b=$abc.index(this);
		x=4;
	})
	$("div#ui-header-left1").click(function(){
		if (b<x){
			$('article').eq(4).css('display','block')
			.siblings('article').css('display','none');
			x=0;
		}
		else if(x==0){
			$('article').eq(b).css('display','block')
			.siblings('article').css('display','none');
			x=4;
		}
	})
	$('.cii-item').click(function(){
		var c=$(this).text();
		$("#dangqian").text("当前城市-"+c);
		$('.wi-header-city').text(c);
		$('#dw').scrollTop(0);
		$('article').eq(0).css('display','block').siblings('article').css('display','none');
		$('li.touch').eq(0).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
		x=4;
	})
	$('.cii-flex-item').click(function(){
		var c=$(this).text();
		$("#dangqian").text("当前城市-"+c);
		$('.wi-header-city').text(c);
		$('article').eq(0).css('display','block').siblings('article').css('display','none');
		$('li.touch').eq(0).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
		x=4;
	})
})
$(function(){
	$(".si-top-item").click(function(){
		var g=$(".si-top-item").index(this);
		$(".paixu").css('display','block')
		if(g==0){
			$("#px1").css('display','block');
			$("#px2").css('display','none')
		}
		if(g==1){
			$("#px1").css('display','none');
			$("#px2").css('display','block')
		}
	})
	$(".totop").click(function(){
		$(".paixu").css('display','none');
		$(".shop1").css('display','block');
		$(".shop2").css('display','none');
	})
	$(".todeep").click(function(){
		$(".paixu").css('display','none');
		$(".shop2").css('display','block');
		$(".shop1").css('display','none');
	})

})
$(function(){
		var cl=$("ul.slideshow-item")
		cl.ready(function autoPlay(){
		var ul=$("ul.slideshow-item")
		ul.animate({right:'+=0rem'},3000);
		ul.animate({right:'+=3.75rem'},500);
		ul.animate({right:'+=0rem'},3000);
		ul.animate({right:'+=3.75rem'},500);
		ul.animate({right:'+=0rem'},3000);
		ul.animate({right:'+=3.75rem'},500);
		ul.animate({right:'0'},0);
		setTimeout(autoPlay,2000);
		})
})
$(function(){
		var sl=$("ul.wi-topline-cont1")
		sl.ready(function autoPlay(){
		sl.animate({bottom:'.29rem'},2000);
		sl.animate({bottom:'+=.29rem'},2000);
		sl.animate({bottom:'+=.29rem'},2000);
		sl.animate({bottom:'0'},0);
		setTimeout(autoPlay,2000);
		})
})
$(function(){
	$('.wi-topline-cont').click(function(){
		$('article').eq(2).css('display','block').siblings('article').css('display','none')
		$('li.touch').eq(2).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
	})
})
$(function(){
	var s=1;
	$('.wi-slideshow-wrap').click(function(){
		if(s==1){
			$('.article1').css('display','block')
			s=2;
		}else if(s==2){
			$('.article2').css('display','block')
			s=1;
		}
	})
	$('.wi-main-item').click(function(){
		if(s==1){
			$('.article1').css('display','block')
			s=2;
		}else if(s==2){
			$('.article2').css('display','block')
			s=1;
		}
	})
	$('.ai-form-item').click(function(){
		if(s==1){
			$('.article1').css('display','block')
			s=2;
		}else if(s==2){
			$('.article2').css('display','block')
			s=1;
		}
	})
	$('.ui-header-left').click(function(){
		$('.article').css('display','none');
	})
})
$(function(){
	$('.sta-pay').click(function(){
		$('.article3').css('display','block')
	})
})
$(function(){
	$('.form-item-l').eq(1).click(function(){
		function show_prompt(){  
		    var value = prompt('输入你基友的名字：', '默认名字');  
		    if(value == null){  
		        // alert('你取消了输入！');  
		    }else if(value == ''||value == '默认名字'){  
		        alert('姓名输入为空，请重新输入！');  
		        show_prompt();  
		    }else{  
		        alert(value+'已注册成功');  
		    }  
		} 
		show_prompt();
	})
	$('.form-item-l').eq(2).click(function(){
		$('article').eq(1).css('display','block').siblings('article').css('display','none');
		$('li.touch').eq(1).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
	})
	$('.form-item-l').eq(3).click(function(){
		$('article').eq(2).css('display','block').siblings('article').css('display','none');
		$('li.touch').eq(2).css('background','rgb(234,234,234)').siblings('li.touch').css('background','');
	})
	$('.form-item-l').eq(4).click(function(){
		alert('手机：13632295293\n(10:00-11:00在线)')
	})
	$('.form-item-l').eq(5).click(function(){
		alert('QQ：2450792123\n(发给我看看)')
	})
	$('.form-item-l').eq(6).click(function(){
		alert('邮箱：2450792123@qq.com\n(同上)')
	})
})
function Dog(){
	this.name = '狗名字'
	this.method = function gg(){
		console.log('gg')
	}
}
// Dog.prototype.makesound = '123'
// var dog = new Dog()
// alert(dog.name);
// alert(dog.method);
// alert(dog.makesound);

// a = {a:1}
// b = {b:1}

// var extend=function(o,n){
// 	for (var p in n){
// 		 if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) ))
// 			 o[p]=n[p];
// 	 }
//  };
//  alert(extend(a,b))   

var o = { a: 1 , b:3};
var n = { b: 4 };

function extend(o,n){
	for (var p in n){
		 if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) ))
			 o[p]=n[p];
	 }
 };  
 extend(n,o)