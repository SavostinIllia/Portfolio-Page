function pageHeader() {

    $(window).scroll(function(){

        // headerOpacity = Math.min(1, 0.0015*$(this).scrollTop());

        // RESPONSIVE
        // if($(window).outerWidth() >= 320 ){
        //     let headerWidth = Math.min(100, 1*($(this).scrollTop()/$(window).height()*100));
            // console.log(headerWidth)
            // if(this.window.pageYOffset === 0  ){
            //     $('.header').css({
            //         width: '0%'
            //     })
            // }
            // if(this.window.pageYOffset > 20  ){
            //     $('.header').css({
            //         width: '100%' ,
            //         position: 'absolute',
            //     }) 
            // } 
        //     if(this.window.pageYOffset > $(window).height() ){
        //         $('.header').css({
        //             position: 'fixed',
        //         }) 
        //     }
        // }
        // if($(window).outerWidth() <= 991){
        //     let headerWidth = Math.min(100, 0.15*$(this).scrollTop());
        //     console.log(headerWidth)
        //     console.log(window.pageYOffset)
        //     if(this.window.pageYOffset === 0  ){
        //         $('.header').css({
        //             width: '0%'
        //         })
        //     }
        //     if(this.window.pageYOffset > 20  ){
        //         $('.header').css({
        //             width: headerWidth + '%' ,
        //             position: 'absolute',
        //         }) 
        //     } 
        //     if(this.window.pageYOffset > 650  ){
        //         $('.header').css({
        //             position: 'fixed',
        //         }) 
        //     }
        // }
        // RESPONSIVE
        // if($(window).outerWidth() > 992){
        //     let headerWidth = Math.min(100, 0.15*$(this).scrollTop());
        //     if(this.window.pageYOffset === 0  ){
        //         $('.header').css({
        //             width: '0%'
        //         })
        //     }
        //     if(this.window.pageYOffset > 20  ){
        //         $('.header').css({
        //             width: headerWidth + '%' ,
        //             position: 'absolute',
        //         }) 
        //     } 
        //     if ( this.window.pageYOffset > 700){
        //         $('.header').css({
        //             position: 'fixed'
        //         })
        //     }
        // }
    })
}

export default pageHeader;