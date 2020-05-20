function pageHeader() {
    const logo = $('a.logo')
    const headerLinksWrapper = $(".page-navigation")
    const headerLinks = $(".page-navigation ul li a")
    let oldValue = window.pageYOffset
    
    logo.click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    headerLinks.each(function(){
        $(this).click(function(e){
            e.preventDefault()
            const linkAttr= $(this).attr("pagesection")
            $('html, body').animate({
                scrollTop: ($(linkAttr).offset().top) - 50 + 'px'
            }, 1000);
        })
    })

    $(document).ready(function(){

        $(window).scroll(function(){
            let newValue = window.pageYOffset;

            if ( newValue === 0){
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