import './assets/styles/main.css'

function setMinHeight() {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    const main = document.querySelector('main')
    if (header && footer && main) {
        const hhi = header.offsetHeight;
        const fhi = footer.offsetHeight;
        const mhi = window.innerHeight - hhi - fhi;
        main.style.minHeight = `${mhi}px`;
    }
}

window.addEventListener('load', setMinHeight);
window.addEventListener('resize', setMinHeight);