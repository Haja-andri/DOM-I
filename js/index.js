const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1 create a selector

let mySelector1 = document.querySelector('header');
let mySelector2 = document.querySelectorAll('a');
let mySelector3 = document.getElementById('logo-img');
let mySelector4 = document.querySelector('#cta-img');

// Updatting the src for the img

const cta = document.querySelector('#cta-img');
cta.setAttribute('src', siteContent['cta']['img-src']);


const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Updating the nav section

let nav = document.querySelectorAll('nav a');
//nav.forEach(e => {e.textContent = siteContent['nav'][nav-item-1]});
nav.forEach(function(element, index){
  element.textContent = siteContent['nav']['nav-item-'+ ++index];
  element.setAttribute('style', 'color: green'); 
});

// Update for H1
let h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

// Update for Buttom
let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// Update for H4 and Paragraphe for text-content section
let HP = document.getElementsByClassName('text-content')

HP[0].children[0].textContent = siteContent['main-content']['features-h4'];
HP[0].children[1].textContent = siteContent['main-content']['features-content'];

HP[1].children[0].textContent = siteContent['main-content']['about-h4'];
HP[1].children[1].textContent = siteContent['main-content']['about-content'];

HP[2].children[0].textContent = siteContent['main-content']['services-h4'];
HP[2].children[1].textContent = siteContent['main-content']['services-content'];

HP[3].children[0].textContent = siteContent['main-content']['product-h4'];
HP[3].children[1].textContent = siteContent['main-content']['product-content'];

HP[4].children[0].textContent = siteContent['main-content']['vision-h4'];
HP[4].children[1].textContent = siteContent['main-content']['vision-content'];

// Update for H4
let contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent['contact']['contact-h4'];
contact.children[1].textContent = siteContent['contact']['address'];
contact.children[2].textContent = siteContent['contact']['phone'];
contact.children[3].textContent = siteContent['contact']['email'];

// Update for footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

let newNavAnchor1 = document.createElement('a');
newNavAnchor1.textContent = 'last Nav';
newNavAnchor1.href = 'http//:somewhere';
newNavAnchor1.style = 'color: green';

let newNavAnchor2 = document.createElement('a');
newNavAnchor2.textContent = 'First Nav';
newNavAnchor2.href = 'http//:somewhere';
newNavAnchor2.style = 'color: green';

const navBar = document.querySelector('nav')
navBar.appendChild(newNavAnchor1);
navBar.prepend(newNavAnchor2);
