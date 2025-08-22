
let goBtn = document.getElementById("go");
    aBtn = document.getElementById("menu-about"),
    gBtn = document.getElementById("menu-goal"),
    cBtn = document.getElementById("menu-contact");

goBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start"})
});
aBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('about').scrollIntoView({behavior: "smooth", block: "start"})
});
gBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('goal').scrollIntoView({behavior: "smooth", block: "start"})
});
cBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start"})
});