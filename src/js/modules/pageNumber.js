
function pageNumber() {
    let pageIdAttr = parseInt($('#page-number span').attr('page-id'))
    $('#page-number span').text('0' + pageIdAttr)
    $(document).ready(function(){

        $(window).scroll(function(){
            if( window.pageYOffset < 39 ){
                $('#page-number span').text('0' + pageIdAttr)
            }
            if( window.pageYOffset > 250 && window.pageYOffset <= 799){
                $('#page-number span').text('0' + (parseInt(pageIdAttr + 1)))
                
            }
            if(window.pageYOffset > 1000 && window.pageYOffset <= 2449){
                $('#page-number span').text('0' + (parseInt(pageIdAttr + 2)))
            }
            if(window.pageYOffset > 2450 && window.pageYOffset <= 3149){
                $('#page-number span').text('0' + (parseInt(pageIdAttr + 3)))
            }
            if(window.pageYOffset > 3150 && window.pageYOffset <= 3899){
                $('#page-number span').text('0' + (parseInt(pageIdAttr + 4)))
            }
            if(window.pageYOffset > 4000){
                $('#page-number span').text('0' + (parseInt(pageIdAttr + 5)))
            }
        })
    })

}


export default pageNumber
