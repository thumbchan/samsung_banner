var index=0;
$("#main .nav ul li").click(function(){
	index=$(this).index();
	$("#main .pic ul li").eq(index).fadeIn().siblings().fadeOut();
	$(this).addClass("active").siblings().removeClass("active");
})

$(".next").click(function(){
	if(index<3){
		index++;
		$("#main .pic ul li").eq(index).fadeIn().siblings().fadeOut();
		$("#main .nav ul li").eq(index).addClass("active").siblings().removeClass("active");
	}else{
	    index=0;
	    $("#main .pic ul li").eq(index).fadeIn().siblings().fadeOut();
		$("#main .nav ul li").eq(index).addClass("active").siblings().removeClass("active");
	}
})
$(".prev").click(function(){
	if(index>0){
		index--;
		$("#main .pic ul li").eq(index).fadeIn().siblings().fadeOut();
		$("#main .nav ul li").eq(index).addClass("active").siblings().removeClass("active");
	}else{
		index=3;
		$("#main .pic ul li").eq(index).fadeIn().siblings().fadeOut();
		$("#main .nav ul li").eq(index).addClass("active").siblings().removeClass("active");
	}
})