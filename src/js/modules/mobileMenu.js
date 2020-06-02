import pageHeader from './pageHeader';



function mobileMenu() {



    $(document).ready(function(){

        if ( $(window).width() < 639){
            $('.logo').click(function(e){
               e.preventDefault()
               $(this).addClass('menu-shown')
                    $('.page-navigation ').addClass('active');
                    if($('.page-navigation').hasClass('active')){
                        $('body').css({
                            overflowY: 'hidden'
                        })
                        $('.page-navigation ul li').removeClass('hide')
                        $('.page-navigation ul li').addClass('mobile-animated')
                    }
            })
            $('.page-navigation ul').find('.close-btn').click(function(e){
                e.preventDefault()
                $('.page-navigation ').removeClass('active')
                $('.logo').removeClass('menu-shown')               
                $('.page-navigation ul li').removeClass('mobile-animated')
                $('.page-navigation ul li').addClass('hide')
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