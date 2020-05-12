function skills() {

    $(document).ready(function(){
        $(window).scroll(function(){
            if(window.pageYOffset > 2900){
             $('#portfolio').find('.custom-title-low').addClass('active')
            }
            if(window.pageYOffset > 3100){
               $('#portfolio').find('.work:nth-child(1), .work:nth-child(2), .work:nth-child(3)').addClass('active')
            }
            if(window.pageYOffset > 3650){
                $('#portfolio').find('.work:nth-child(4), .work:nth-child(5), .work:nth-child(6)').addClass('active')
             }
        })
    })
}

export default skills;