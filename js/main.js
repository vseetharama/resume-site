$(function () {
    $('main').hide().fadeIn(800);
});

$(function () {
    $('li').hover(
        function(){ $(this).css('background','#dff'); },
        function(){ $(this).css('background',''); }
    );
});

$(function () {
    $('#toggleBtn').click(function(){
        $('#extra').slideToggle();
    });
});