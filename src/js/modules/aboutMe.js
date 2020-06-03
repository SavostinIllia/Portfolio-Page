
function aboutMe() {
let aboutMeSection = $('#about-me')
    $(document).ready(function(){
        if($(window).width() < 400){
            $( window ).resize(function() {
                if($(window).width() > 350){
                    console.log('alert')
                }
            })
        }


        if($(window).innerWidth() <= 639){
            $(window).scroll(function(){
                console.log(window.pageYOffset)
                if(window.pageYOffset > 240){
                    aboutMeSection.find($('.custom-title-low')).addClass('active')
                }
                if(window.pageYOffset > 550){
                    aboutMeSection.find($('.about-me-img')).addClass('active')
                    
                }
                if(window.pageYOffset > 750){
                    aboutMeSection.find($('.about-me-text p')).addClass('animate-text')
                }
                
            })
        }
        if($(window).innerWidth() >= 640){
            $(window).scroll(function(){

                if(window.pageYOffset > 200){
                    aboutMeSection.find($('.custom-title-low')).addClass('active')
                }
                if(window.pageYOffset > 450){
                    aboutMeSection.find($('.about-me-img')).addClass('active')
                    aboutMeSection.find($('.about-me-text p')).addClass('animate-text')
                }
            })
        }
    })

}


export default aboutMe
