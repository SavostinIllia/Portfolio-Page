
function pagePreloader(){ 
    // PRELOADER
    const preloader = document.querySelector('#preloader')

    preloader.addEventListener('animationend', () => {
        setTimeout(()=>{
            preloader.classList.add('hide')
        }, 1000)
    });
    // PRELOADER
}

export default pagePreloader