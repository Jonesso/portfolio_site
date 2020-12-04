const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function sendForm() {
    let link = 'mailto:sonya.pav25@gmail.com' +
        '?subject=' + encodeURIComponent(document.getElementById('subject').value) +
        ' from ' + encodeURIComponent(document.getElementById('name').value) +
        '&body=' + encodeURIComponent(document.getElementById('message').value);
    window.location.href = link;
}