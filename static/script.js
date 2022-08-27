$("head").load("templates/head.html");
$("#nav").load("templates/template.html #nav-big, #nav-small", resize);
$("#picture-header").load("templates/template.html #header");
$("#footer").load("templates/template.html #contact, footer");

window.onload = resize;
window.onresize = resize;
resize();

function resize() {
    var navHeight;
    if (document.getElementById("nav-small") == null || document.getElementById("nav-big") == null) {
        return;
    }else if (document.getElementById("nav-small").clientHeight == 0) {
        navHeight = document.getElementById("nav-big").clientHeight;
    }else{
        navHeight = document.getElementById("nav-small").clientHeight;
    }
    document.getElementById("content").style.marginTop = navHeight+"px";
}

function menu() {
    document.getElementById("menu-dropdown").classList.toggle("w3-show");
}

document.onclick = function(event) {
    if (!event.target.matches('#menu-img') && !event.target.matches('#menu-dropdown')) {
        document.getElementById("menu-dropdown").classList.remove("w3-show");
    }
}

fetch('static/leadership.json', { 
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => getEmails(json));

function getEmails(json) {
    var president = json.exec[0];
    var secretary = json.exec[4];
    document.getElementById("president-footer").innerHTML = president.position+" "+president.name+": <br><a href=\"mailto:"+president.email+"\">"+president.email+"</a><br>";
    document.getElementById("secretary-footer").innerHTML = secretary.position+" "+secretary.name+": <br><a href=\"mailto:"+secretary.email+"\">"+secretary.email+"</a><br>";
}