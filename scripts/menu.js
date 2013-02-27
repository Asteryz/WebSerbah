$(document).ready(function()
{
	var name = "#floatMenu";
	var menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")));
	$(window).scroll(function(){
		offset = menuYloc + $(document).scrollTop() + "px";
		$(name).css("top", offset);
	});
});