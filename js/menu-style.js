$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function(){
        $('.open').removeClass('oppenned');
    });
    document.getElementById('hide').onclick = function() {
        document.getElementById('title').style.display = 'none';
    };
});