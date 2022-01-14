let loadWrapper = document.querySelector("#load-wrapper");
window.addEventListener('load', function() {
    loadWrapper.parentElement.removeChild(loadWrapper);
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let skyKid, cloudPart

let sky = document.querySelector('.sky');
skyKid = document.querySelector('.sky').children;
let clone = document.querySelector('#cloud');
let cloneChild = document.querySelector('#cloud').children;
cloudPart = document.querySelectorAll('#cloud-back');

for (let num = 1; num < 26; num++) {
    sky.appendChild(clone.cloneNode(true));

    clone.className = 'cloud-' + [num];

    for (let i = 0; i < cloneChild.length; ++i) {
        cloneChild[i].className = 'cloud-part-' + [num];
    }
}


// Reference counter outside of function
var index = 0;
// Collect all sections in a NodeList
const sections = document.querySelectorAll('section');
// Reference nav
var scrollBtn = document.querySelector('#scroll-button');
// Collect all anchors into a HTMLCollection
var links = document.links;
// UPDATED
// Register document on click event callback is move()
scrollBtn.addEventListener('click', scrollDown, false);
// UPDATED
/* scrollDown() determines the direction of scroll by index
 */

function scrollDown(e) {
    if (e.target == links[0]) {
        index--;
        if (index < 0) {
            index = sections.length - 1;
        }
    } else {
        index++;
        if (index > sections.length - 1) {
            index = 0;
        }
    }
    return indexScroll(index);
}


// Pass index thru indexScroll
function indexScroll(index) {
    var x = sections[index];
    console.log(x);
    x.scrollIntoView({
        behavior: 'smooth'
    });
}

const scrollButton = document.querySelector('.fa');
const options = {
    rootMargin: "-20%"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const scroller = document.getElementById('scroller');
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (id === 'contact') {
                scroller.classList.add("flip");
            } else {
                scroller.classList.remove("flip");
            }
        } else {
            entry.target.classList.remove('active');
        }
        return;
    });
}, options);

sections.forEach(sections => {
    observer.observe(sections);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('#nav-icon,.mobi-menu').click(function() {
    $('#nav-icon').toggleClass('open');
    $('.menu-overlay').toggleClass('visible');
    $('main, .logo, footer').toggleClass('hide');
});

(function($) {

    var allPanels = $('.column > dd').hide();

    $('.column > dt > a').click(function() {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });

})(jQuery);

//document.addEventListener('DOMContentLoaded', init)