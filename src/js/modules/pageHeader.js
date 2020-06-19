function pageHeader() {
    const logo = $('a.logo')
    const headerLinksWrapper = $(".page-navigation .header-menu")
    const headerLinks = $(".page-navigation .header-menu li a")
    const headerDescktopNav = $('.header-desktop li a')
    let oldValue = window.pageYOffset

    function mobileLinkHandler(e){
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
    }

    function descktopLinkHandler(e){
        const linkAttr= $(this).attr("pagesection")
       
            $('html, body').animate({
                scrollTop: ($(linkAttr).offset().top) - 50 + 'px'
            }, 1000);
    
    }

    $(document).ready(function(){

        
            headerLinks.each(function(){
                $(this).click(mobileLinkHandler)
               
            })
        
            headerDescktopNav.each(function(){
                $(this).click(descktopLinkHandler)
                $(this).mouseenter(function(){
                    let translateX = $(this).attr('pagetranslate')
                    let linkWidth = $(this).attr('linkwidht')
                    $('.li-hover').css({
                        left: translateX + 'px',
                        height: 1.8 + 'px',
                        width: linkWidth + 'px'
                    })
                    $('.li-hover-after').css({
                        left: translateX + 'px',
                        height: 1.8 + 'px',
                        width: linkWidth + 'px'
                    })
                })
                
            })
            headerDescktopNav.mouseleave(function(e){
                $('.li-hover').css('height', '0')
                $('.li-hover-after').css('height', '0')
            })

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