let btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

docHeight = docElem.scrollHeight;
if(docHeight !== 0){
    offset = docHeight / 2;
}

window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    if(scrollPos > offset){
        btt.classList.add('visible');
    } else {
        btt.classList.remove('visible');
    }
});

btt.addEventListener('click', function(ev){
    ev.preventDefault();
    scrollToTop();
});

function scrollToTop(){
    let scrollInterval = setInterval(function(){
        scrollPos = docElem.scrollTop;
        if(scrollPos !== 0){
            window.scrollBy(0, -100);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
