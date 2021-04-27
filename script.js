const menuIcon = document.querySelector('h1');
const navbar = document.querySelector('h2');

menuIcon.addEventListener('mouseover', () => {
    navbar.classList.toggle('change');
});
menuIcon.addEventListener('mouseout', () => {
    navbar.classList.toggle('change');
});
