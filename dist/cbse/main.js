var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, curr) {
    var slides = document.getElementsByClassName("focus-spot-slides");
    curr = n;
    showSlides(slideIndex = Math.min(slideIndex + n, slides.length), curr);
}

function showSlides(n , curr) {
    var i;
    var slides = document.getElementsByClassName("focus-spot-slides");
    if (slideIndex < slides.length) {
        document.querySelector(".prev").classList.add('disabled');
    }
    if (slideIndex > 1) {
        document.querySelector(".prev").classList.remove('disabled');
        document.querySelector(".next").classList.remove('disabled');
    }
    if (slideIndex >= slides.length) {
        document.querySelector(".next").classList.add('disabled');
    }
    for (i = 0; i < slides.length; i++) {
        slides[i]['style'].display = "none";
    }
    if(curr == -1){
        document.querySelector(".next").classList.remove('disabled');
    }else if(curr == +1){
        document.querySelector(".prev").classList.remove('disabled');
    }
    slides[slideIndex - 1]['style'].display = "block";
}

