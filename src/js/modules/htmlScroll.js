
function htmlScroll () { 

    $(document).ready(function(){
        $( window ).scroll(function() {
            $('body').addClass('scrolling')
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                $('body').removeClass('scrolling')
            }, 1200) );
          
        });
    })

}

export default htmlScroll