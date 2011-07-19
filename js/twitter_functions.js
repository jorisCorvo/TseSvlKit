function makeTwitterPost(input){
	var result="<li><a href=\"\"><div class=\"ui-btn-text\">"+
					"<img class=\"post_img\" src=\"rss/logo_spirale_normal.jpg\">"+
					"<h3 class=\"screen_name\">"+input.user.screen_name+"</h3>"+
					"<p class=\"name\">  "+input.user.name+"</p>"+
					"<p class=\"post_content\">"+input.text+"</p>"+
					"<p class=\"post_date\">"+makeTwitterDate(input.created_at)+"</p></div></a></li>";
	return result;
}

function makeTwitterDate(input){
	var month={ Jan:"Janvier",
			Feb:"Février",
			Mar:"Mars",
			Apr:"Avril",
			May:"Mai",
			Jun:"Juin",
			Jul:"Juillet",
			Aug:"Août",
			Sep:"Septembre",
			Oct:"Octobre",
			Nov:"Novembre",
			Dec:"Decembre",};
	return input.slice(8,10)+" "+month[input.slice(4,7)];

}
