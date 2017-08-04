window.onload=function(){
	new Swiper('.swiper-container',{
		pagination:'.swiper-pagination',
		loop:true,
		mousewheelControl:false,
		autoplay:3000,
	})
}


$(document).ready(function(){

	$(".container .thumbnail").hover(function(){
		$(this).children(".img_pocket").show()
		$(this).children(".img_pocket").text("六一儿童节“快乐萌宝”活动专题网站")
	},function(){
		$(this).children(".img_pocket").hide()
	})

	$(".container .thumbnail1").hover(function(){
		$(this).css("background","#0ecbca")
		// $(this).children("h5").css("color","#fff")
		// $(this).children("p").css("color","#fff")
		$(this).children(".caption").children("h5").css("color","#fff")
		$(this).children(".caption").children("p").css("color","#fff")
	},function(){
		$(this).css("background","#fff")
		$(this).children(".caption").children("h5").css("color","#888")
		$(this).children(".caption").children("p").css("color","#bcbcbc")

	})
	
	// ****************************************************
	$(".container .thumbnail1").hover(function(){
		$(this).children(".img-area").css("background-color","#fff")
	},function(){
		$(this).children(".img-area").css("background-color","#ddd")

	})

	$(".container .t1").hover(function(){
		$(this).children(".img-area").children("img").attr("src","images/b_web.png")
	},function(){
		$(this).children(".img-area").children("img").attr("src","images/w_web.png")
	})

	$(".container .t2").hover(function(){
		$(this).children(".img-area").children("img").attr("src","images/b_move.png")
	},function(){
		$(this).children(".img-area").children("img").attr("src","images/w_move.png")
	})

	$(".container .t3").hover(function(){
		$(this).children(".img-area").children("img").attr("src","images/b_grapng.png")
	},function(){
		$(this).children(".img-area").children("img").attr("src","images/w_gra.png")
	})
	$(".container .t4").hover(function(){
		$(this).children(".img-area").children("img").attr("src","images/b_user.png")
	},function(){
		$(this).children(".img-area").children("img").attr("src","images/w_user.png")
	})
	

})

