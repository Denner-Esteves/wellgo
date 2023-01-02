const menu = () => {
    document.body.classList.toggle('open');
}

// const openLogin = () => {
//     document.body.classList.toggle('login');
// }

AOS.init({
    once: true,
    offset: 150
});