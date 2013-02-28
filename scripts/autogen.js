function NavigationMenu(){
	var menu = ["Hoofdpagina", "HTTP", "Photobrowser"];
	var source = ["index.html", "http.html", "photobrowser.html"];
	var navID = "floatMenu";
	
	document.write("<nav id=\"" + navID + "\"><div class=\"content\"><section><span>Menu:</span><div>");
	for(var i = 0; i < menu.length; i++) {
		document.write("<p><a href=\"" + source[i] + "\">" + menu[i] + "</a></p>\n");
	}
	document.write("</div></section></div></nav>");
}

function Footer() {
	var p1 = "Een website voor poort 80, door poort 80.";
	var p2 = "&copy Alper Aslan en Marc Smids";
	
	document.write("<footer>");
	document.write("<section><span>References</span><table class=\"references\"></table></section>"); //References
	document.write("<section><span>Sitemap</span></section>"); //Sitemap
	document.write("<p>" + p1 + "</p><p>" + p2 + "</p>");
	document.write("</footer>");
}

function Header() {
	var h = "HyperText Transfer Protocol";
	var p = "Een website voor poort 80, door poort 80.";
	document.write("<header>");
	document.write("<h1>" + h + "</h1><p>" + p + "</p>");
	document.write("</header>");
}