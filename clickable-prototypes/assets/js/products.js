$(document).ready(function () {
    
    $(".nav-item").click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(".categories-check-box").change(function() {
        $(this).parent().toggleClass('active');
        if($(this).attr('id') == 'all') {
            $(this).parent().siblings().removeClass('active');
        } else {
            $(this).parent().siblings(":last").removeClass('active');
        }
    })

   
});