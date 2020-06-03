function pageHeader() {
    const logo = $('a.logo')
    const headerLinksWrapper = $(".page-navigation .header-menu")
    const headerLinks = $(".page-navigation .header-menu li a")
    let oldValue = window.pageYOffset

    headerLinks.each(function(){
        $(this).click(function(e){
            e.preventDefault()
            const linkAttr= $(this).attr("pagesection")
            $('.page-navigation').removeClass('active')
            $('.page-navigation ul li').removeClass('mobile-animated')
            $('.page-navigation ul li').addClass('hide')
            $('.page-navigation .mobile-socials li').removeClass(' social-mobile-animated')
            $('.page-navigation .mobile-socials li').addClass('social-hide')
            $('.logo').removeClass('menu-shown')
            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: ($(linkAttr).offset().top) - 50 + 'px'
                }, 1000);
            },1500)

            $('body').css({
                overflowY: 'auto'
            })
            
        })
        $(this).mouseenter(function(e){
            const translateX= $(this).attr("pagetranslate")
            const linkWidht = $(this).attr("linkwidht")
            $('.li-hover').css({
                left: translateX + 'px',
                height: '1.8px',
                width: linkWidht + 'px'
            })
            $('.li-hover-after').css({
                left: translateX + 'px',
                height: '1.8px',
                width: linkWidht + 'px'
            })
        })
        
    })

    headerLinksWrapper.mouseleave(function(e){
        $('.li-hover').css('height', '0')
        $('.li-hover-after').css('height', '0')
    })

    $(document).ready(function(){

        $(window).scroll(function(){
            let newValue = window.pageYOffset;

            if ( newValue === 0 || newValue < 0){
                $('header').removeClass('active')
            }
            else if(oldValue - newValue < 0){
                $('header').removeClass('active')
                $('header').addClass('hiden')

            } else if(oldValue - newValue > 0){
                $('header').addClass('active')
                $('header').removeClass('hiden')

            }

            oldValue = newValue;
            
        })
    })

}

export default pageHeader;