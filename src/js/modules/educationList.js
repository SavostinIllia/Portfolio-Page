function educationList() {

    $(window).scroll(function(){
        if(this.window.pageYOffset > 1050  ){
            $('#experience .custom-title-low').addClass('active')
            console.log(window.pageYOffset)
        }   
            if(window.pageYOffset > 1099) {
                $('.education-list li:nth-child(1)').addClass('active')
            }
            if(window.pageYOffset > 1200) {
                $('.education-list li:nth-child(2)').addClass('active')
            }
            if(window.pageYOffset > 1320) {
                $('.education-list li:nth-child(3)').addClass('active')
 
            }
            if(window.pageYOffset > 1440) {
                $('.education-list li:nth-child(4)').addClass('active')
            }
            if(window.pageYOffset > 1600) {
                $('.education-list li:nth-child(5)').addClass('active')
            }
            if(window.pageYOffset > 1750) {
                $('.education-list li:nth-child(6)').addClass('active')
            }
            if(window.pageYOffset > 1950) {
                $('.education-list li:nth-child(7)').addClass('active')
            }
    })

}

export default educationList