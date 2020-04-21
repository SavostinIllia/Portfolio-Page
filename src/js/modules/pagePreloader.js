
function pagePreloader(){ 
    // PRELOADER
    const preloader = document.querySelector('#preloader')

    preloader.addEventListener('animationend', () => {
        // preloader.style.background = '#161723'
        setTimeout(()=>{
            preloader.classList.add('hide')
        }, 1000)
    });
    // PRELOADER
}

export default pagePreloader