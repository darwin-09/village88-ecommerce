$( document ).ready(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    $("#sortable li").mouseleave(function () { 
        $(this).find('.fa-trash-alt').addClass('d-none');
    });

    $('.sort-img').mouseenter(function() {
        $(this).css('cursor', 'grab');
        $(this).parent().siblings("div").find('.fa-trash-alt').removeClass('d-none');
    });

    $(".sort-img").mousedown(function() {
        $(this).css('cursor', 'grabbing');
    });
    $(".sort-img").mouseup(function() {
        $(this).css('cursor', 'grab');
    });

    $('.dropdown .dropdown-menu').on({
        "click":function(e){
          e.stopPropagation();
        }
    });
    

    $('.fa-pencil-alt').click(function () {
        let value = $(this).parent().siblings('span')[0].innerText;
        let inputText = "<input type='text' name='category_name' value='" + value + "'>";
        $(this).parent().siblings('span').replaceWith(inputText);
    });

    $('li.dropdown-item').mouseenter(function () {
        $(this).children('div').removeClass('d-none');
    });

    $('li.dropdown-item').mouseleave(function () {
        let value = $(this).children('input').val();
        let span = "<span>" + value + "</span>"; 
        $(this).children('input').replaceWith(span);
        $(this).children('div').addClass('d-none');
    });


    $('.fa-trash-alt').click(function () {
        $('#delete').modal("show");

    });

   

});