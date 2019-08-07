//Get the current year
$('#year').text(new Date().getFullYear());


//hide on collapse
$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});