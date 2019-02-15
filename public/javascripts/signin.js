$(function () {
    $("body").css({
        "width":function () {
            return $(document).width();
        },
        "height":function () {
            return $(document).height();
        }
    });
	$("#un").focus(function(){
		$("#icon-box1").css("border-color","white");
	}).blur(function(){
		$("#icon-box1").css("border-color","#aaa");
	});
	$("#pwd").focus(function(){
		$("#icon-box2").css("border-color","white");
	}).blur(function(){
		$("#icon-box2").css("border-color","#aaa");
	});
	$("#btn-reset").click(function () {
		$("#un,#pwd").val("");
    });
});
