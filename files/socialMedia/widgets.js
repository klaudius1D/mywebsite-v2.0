
//Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//Initialize ScrollSpy
$('body').scrollspy({ target: '#main-nav' });

//Smooth Scroll
$("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {

            window.location.hash = hash;
        });
    }
});