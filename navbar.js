var myVar= setInterval(function () {myFunction()}, 50);

function myFunction() {

    var top = $("#topBack");
    var about = $("#aboutBack");
    var experience = $("#expBack");
    var projects = $("#projBack");
    var contacts = $("#conBack");
    var active = $(".active");
    index = active.data("index");

    top.css("backround-color", "#FF9912");
   	about.css("backround-color", "white");
    	experience.css("backround-color", "white");
    	projects.css("backround-color", "white");
    	contacts.css("backround-color", "white");
    	top.css("width", "100px");
    	top.css("height", "24px");

    if(index == 1) {
    	top.css("color", "#FF9912");
    	about.css("color", "white");
    	experience.css("color", "white");
    	projects.css("color", "white");
    	contacts.css("color", "white");
    	top.css("backround-color", "#FF9912");
    	/*about.css("color", "white");
    	experience.css("color", "white");
    	projects.css("color", "white");
    	contacts.css("color", "white");*/
    } else if(index == 2) {
    	top.css("color", "white");
    	about.css("color", "#FF9912");
    	experience.css("color", "white");
    	projects.css("color", "white");
    	contacts.css("color", "white");
    } else if(index == 3) {
    	top.css("color", "white");
    	about.css("color", "white");
    	experience.css("color", "#FF9912");
    	projects.css("color", "white");
    	contacts.css("color", "white");
    /*} else if(index == 4) {
    	top.css("color", "white");
    	about.css("color", "white");
    	experience.css("color", "white");
    	projects.css("color", "#FF9912");
    	contacts.css("color", "white");*/
    } else {
    	top.css("color", "white");
    	about.css("color", "white");
    	experience.css("color", "white");
    	projects.css("color", "white");
    	contacts.css("color", "#FF9912");
    }


  
    
}