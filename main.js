const backToTop = document.getElementById('back-to-top');

window.addEventListener("scroll", showButton)

function showButton() {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none'
    }
}

backToTop.addEventListener("click", toTop);


function toTop() {
    window.scrollTo(0,0);
}