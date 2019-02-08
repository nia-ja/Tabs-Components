let slideIndex = 1;
// Invokes function showSlides, when the page is load (to show first image)
showSlides(slideIndex);

// ============== PREVIOUS / NEXT ========================
// Previous control
const previousArrow = document.querySelector('.prev');
//click event is triggering minusSlide function
previousArrow.addEventListener('click', minusSlide);
// Substract 1 from slideIndex, is passing new value as an argument to showSlides function and is invoking it
function minusSlide() {
    showSlides(slideIndex -= 1);
}


// Next control
const nextArrow = document.querySelector('.next');
//click event is triggering plusSlide function
nextArrow.addEventListener('click', plusSlides);
// Adds 1 to slideIndex, is passing new value as an argument to showSlides function and is invoking it
function plusSlides() {
  showSlides(slideIndex += 1);
}


// ================== DOTS ==========================
// Image controls
class DotControl {
    constructor(dotControl) {
        // setting up a reference to our DOM node
        this.dotControl = dotControl;
        // set up a reference to our custom data attribute
        this.dotIndex = this.dotControl.dataset.dot;
        // added a click event listener to our dot. That calls the method dotClick
        this.dotControl.addEventListener('click', this.dotClick.bind(this))
    }
    dotClick() {
        //that calls the function showSlides and passes a value of current dot index assigning it to slideIndex
        showSlides(slideIndex = this.dotIndex);
    }
}

const dotControls = document.querySelectorAll('.dot')
                    .forEach(dotControl => new DotControl(dotControl));


// ========= SHOW SLIDES ========================

function showSlides(n) {
    // grab all slides, return NodeList
    const slides = document.querySelectorAll(".mySlides");
    console.log(slides);
    // grab all dots, return NodeList
    const dots = document.querySelectorAll(".dot");
    // makes slides looping with nextArrow
    if (n > slides.length) {slideIndex = 1};
    // makes slides looping with previousArrow
    if (n < 1) {slideIndex = slides.length};
    // set all slides to be invisible
    slides.forEach(slide => slide.style.display = "none");
    // set all dots as unactive
    dots.forEach(dot => (dot.className = dot.className.replace(" active", "")));
    //slideIndex-1 gives us a right NodeList index for the same object instance
    slides[slideIndex-1].style.display = "block"; // displays the right slide (the right picture + text is displayed)
    dots[slideIndex-1].className += " active"; // set a right dot as an active (different color)
}