function inTouch() {

    $(document).ready(function(){
        $(window).scroll(function(){
            if(window.pageYOffset > 3850){
                $('#in-touch').find('.custom-title-low').addClass('active')
            }
            if ( window.pageYOffset> 4050){
               $('#in-touch').find('.section-container ').addClass('active')
            }
        })
    })
}

export default inTouch