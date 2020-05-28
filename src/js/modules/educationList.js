function educationList() {

    $(window).scroll(function(){
        if(this.window.pageYOffset > 1050  ){
            $('#experience .custom-title-low').addClass('active')
            console.log(window.pageYOffset)
        }   
            if(window.pageYOffset > 1099) {
                $('.education-list li:nth-child(1)').addClass('active')
            }
            if(window.pageYOffset > 1199) {
                $('.education-list li:nth-child(2)').addClass('active')
            }
            if(window.pageYOffset > 1349) {
                $('.education-list li:nth-child(3)').addClass('active')
 
            }
            if(window.pageYOffset > 1599) {
                $('.education-list li:nth-child(4)').addClass('active')
            }
            if(window.pageYOffset > 1799) {
                $('.education-list li:nth-child(5)').addClass('active')
            }
            if(window.pageYOffset > 1999) {
                $('.education-list li:nth-child(6)').addClass('active')
            }
            if(window.pageYOffset > 2189) {
                $('.education-list li:nth-child(7)').addClass('active')
            }

    })

}

export default educationList