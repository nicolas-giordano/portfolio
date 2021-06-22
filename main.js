const backToTop = document.getElementById('back-to-top');
const git = document.getElementById('git');
const resume = document.getElementById('resume');
const about = document.getElementById('about')
console.log(git, resume);
window.addEventListener("scroll", showButton)
window.addEventListener("scroll", changeColor)

function changeColor() {
    if (window.pageYOffset > about.offsetTop - 10) {
        git.style.color = '#212127'
        resume.style.color = '#212127'
    } else {
        git.style.color = '#fbfbfd'
        resume.style.color = '#fbfbfd'
    }
}

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