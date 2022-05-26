$(document).ready(function () {
    $('#btnActivation').click(function () {
        if (!$('#btnActivation').hasClass(('btn--activated'))) {
            $('#btnActivation').removeClass('btn--activate');
            $('#btnActivation').addClass('btn--waiting');
            setTimeout(function () {
                removeWaiting();
            }, 900);
        }

    });

    function removeWaiting() {
        $('#btnActivation').removeClass('btn--waiting');
        $('#btnActivation').addClass('btn--activated');
    }

});