
function pagePreloader(){ 
    // PRELOADER
    const preloader = document.querySelector('#preloader')
    $('body').css({
        overflowY: 'hidden'
    })
    preloader.addEventListener('animationend', () => {
        setTimeout(()=>{
            preloader.classList.add('hide')
            $('body').css({
                overflowY: 'auto'
            })
        }, 1000)
    });
    // PRELOADER
}

export default pagePreloader