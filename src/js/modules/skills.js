function skills() {
    $(document).ready(function(){
        let skillSection = $('#skills')
        let skillCard = $('.skill-card')
        skillCard.find($('.btn')).click(function(e){
            e.preventDefault()
            $(this).parent().parent().removeClass('shown').addClass('active') //addin class to the .skill-card-content
            $(this).parent().parent().find($('.skill-more')).addClass('active')

            $('.close-btn').mouseenter(function(){
                $('.close-path').attr('d', 'M11.64051 11.80741L0.994836 1.00502L1 1L6.64567 6.80238L6.64051 6.80741Z')
            })
            $('.close-btn').mouseleave(function(){
                $('.close-path').attr('d', 'M6.64051 6.80741L0.994836 1.00502L1 1L6.64567 6.80238L6.64051 6.80741Z')
            })
            $('.close-btn').click(function(e){
                $(this).parent().removeClass('active')
                $(this).parent().parent().removeClass('active').addClass('shown')
            })
            
            skillCard.mouseleave(function(){
                $(this).find('.skill-card-content').removeClass('shown')
            })
        })
        $(window).scroll(function(){
            if(window.pageYOffset > 2500){
                skillSection.find($('.custom-title-low')).addClass('active')
            }
            if(window.pageYOffset > 2650){
                skillSection.find($('.skill-card')).addClass('active')
            }
        })

        
    })

}

export default skills