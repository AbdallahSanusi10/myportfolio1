/*toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


/*scroll section activate*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*scroll reveal*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });




/*typed js showing web devloper and chemical engineer on the home page*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Chemical Engineer'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});










/*Activate the Read more button*/
var readMoreBtn = document.getElementById('about-me-more');
var seeLessBtn = document.getElementById('see-less');
var paragraphs = document.querySelectorAll('#extra-content');
var shouldDisplayContent = localStorage.getItem('displayContent') === 'true';

function toggleContentDisplay(display) {
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.toggle('hide', !display);
  }
  readMoreBtn.style.display = display ? 'none' : 'block';
  seeLessBtn.style.display = display ? 'block' : 'none';
}

readMoreBtn.addEventListener('click', function() {
  toggleContentDisplay(true);
  localStorage.setItem('displayContent', 'true');
});

seeLessBtn.addEventListener('click', function() {
  toggleContentDisplay(false);
  localStorage.setItem('displayContent', 'false');
});

toggleContentDisplay(shouldDisplayContent);







/* submit for Contact me section
var contactForm = document.getElementById('contact');

contactForm.addEventListener('submit', function(event) {
  //event.preventDefault(); // Prevents the form from submitting and refreshing the page

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (message.trim() !== '') {
    var alertMessage = 'Message sent!\n\n' +
                       'Name: ' + name + '\n' +
                       'Phone Number: ' + phone + '\n' +
                       'Email Address: ' + email + '\n' +
                       'Email Subject: ' + subject + '\n' +
                       'Message: ' + message;

    alert("Message Sent!"); // Display an alert with the submitted information
    contactForm.reset(); // Reset the form fields after successful submission
  }
});

*/