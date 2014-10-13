var myVar= setInterval(function () {myFunction()}, 50);

function myFunction() {

    var top = $("#navTop");
    var about = $("#navAbout");
    var experience = $("#navExp");
    var contacts = $("#navContact");
    var active = $(".active");
    index = active.data("index");


    if(index == 1) {
    	top.css("color", "#FF9912");
    	about.css("color", "white");
    	experience.css("color", "white");
    	contacts.css("color", "white");
    } else if(index == 2) {
    	top.css("color", "white");
    	about.css("color", "#FF9912");
    	experience.css("color", "white");
    	contacts.css("color", "white");
    } else if(index == 3) {
    	top.css("color", "white");
    	about.css("color", "white");
    	experience.css("color", "#FF9912");
    	contacts.css("color", "white");
    } else {
    	top.css("color", "white");
    	about.css("color", "white");
    	experience.css("color", "white");
    	contacts.css("color", "#FF9912");
    }


  
    
}