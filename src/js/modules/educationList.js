function educationList() {
    let educationHeightstep = 130

    $(window).scroll(function(){
        console.log(window.pageYOffset)
        if(this.window.pageYOffset > 1050  ){
            $('#education .custom-title-low').addClass('active')
        }
        if(this.window.pageYOffset >= 1090  ){
            educationHeightstep+= 8
            let headerHeight = Math.min(1100, educationHeightstep);
            $('.education-list').css({
                height: headerHeight  + 'px'
            })
            if(headerHeight > 158) {
                $('.education-list li:nth-child(1)').addClass('active')
            }
            if(headerHeight > 280) {
                $('.education-list li:nth-child(2)').addClass('active')
            }
            if(headerHeight > 454) {
                $('.education-list li:nth-child(3)').addClass('active')
 
            }
            if(headerHeight > 612) {
                $('.education-list li:nth-child(4)').addClass('active')
            }
            if(headerHeight > 770) {
                $('.education-list li:nth-child(5)').addClass('active')
            }
            if(headerHeight > 938) {
                $('.education-list li:nth-child(6)').addClass('active')
            }
            if(headerHeight > 1000) {
                $('.education-list li:nth-child(7)').addClass('active')
            }
            // test()
        }
    })

}

export default educationList