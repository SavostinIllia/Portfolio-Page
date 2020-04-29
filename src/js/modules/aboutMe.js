
function aboutMe() {
let aboutMeSection = $('#about-me')
    $(document).ready(function(){
        
        $(window).scroll(function(){

            if(window.pageYOffset > 200){
                aboutMeSection.find($('.custom-title-low')).addClass('active')
            }
            if(window.pageYOffset > 450){
                aboutMeSection.find($('.about-me-img')).addClass('active')
                aboutMeSection.find($('.about-me-text p')).addClass('animate-text')
            }
        })
    })

}


export default aboutMe
