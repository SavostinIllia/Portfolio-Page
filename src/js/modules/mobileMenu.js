import pageHeader from './pageHeader';



function mobileMenu() {



    $(document).ready(function(){

        if ( $(window).width() < 900){
            $('.logo').click(function(e){
               e.preventDefault()
               $(this).addClass('menu-shown')
                    $('.page-navigation ').addClass('active');
                    if($('.page-navigation').hasClass('active')){
                        $('body').css({
                            overflowY: 'hidden',
                            "-webkit-overflow-scrolling": "touch"
                        })
                        $('.page-navigation .header-menu li').removeClass('hide')
                        $('.page-navigation .header-menu li').addClass('mobile-animated')
                        
                        $('.page-navigation .mobile-socials li').addClass('social-mobile-animated')
                        $('.page-navigation .mobile-socials li').removeClass('social-hide')

                        $('.page-navigation .header-cv').addClass('active')
                        $('.page-navigation .header-cv').removeClass('hide')
                    }
            })
            $('.page-navigation ul').find('.close-btn').click(function(e){
                e.preventDefault()
                $('.page-navigation ').removeClass('active')
                $('.logo').removeClass('menu-shown')      

                $('.page-navigation .header-menu li').removeClass('mobile-animated')
                $('.page-navigation .header-menu li').addClass('hide')

                $('.page-navigation .mobile-socials li').removeClass(' social-mobile-animated')
                $('.page-navigation .mobile-socials li').addClass('social-hide')

                
                $('.page-navigation .header-cv').removeClass('active')
                $('.page-navigation .header-cv').addClass('hide')

                if(!$('.page-navigation').hasClass('active')){
                    $('body').css({
                        overflowY: 'auto'
                    })
                }
            })
        }
    })
}

export default mobileMenu