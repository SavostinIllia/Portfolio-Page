
function pagePreloader(){ 
    // PRELOADER
    const svgDraw = $('.logo-svg')
    const headerDescktopNav = $('.header-desktop li')
    $('.preloader-loaded').on('animationstart', function(){
        $('body').css({
            overflowY: 'hidden'
        })
    })
    $('.preloader-loaded').on('animationend', function(){
        $('.header-desktop li').addClass('active')
        $('body').css({
            overflowY: 'auto'
        })
        $('#hero').find($('.hero-text')).addClass('active')
    })
    
    // PRELOADER
}

export default pagePreloader