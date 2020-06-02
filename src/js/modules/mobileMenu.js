import pageHeader from './pageHeader';



function mobileMenu() {



    $(document).ready(function(){

        if ( $(window).width() < 639){
            $('.logo').click(function(e){
               e.preventDefault()
               $(this).addClass('menu-shown')
            //    $('.mobile-menu').addClass('active')
                setTimeout( () => {
                    $('.page-navigation ').addClass('active');
                    if($('.page-navigation').hasClass('active')){
                        $('body').css({
                            overflowY: 'hidden'
                        })
                    }
            } , 600)

            })
            $('.page-navigation ul').find('.close-btn').click(function(e){
                e.preventDefault()
                $('.page-navigation ').removeClass('active')
                $('.logo').removeClass('menu-shown')
                // $('.mobile-menu').removeClass('active')
                
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