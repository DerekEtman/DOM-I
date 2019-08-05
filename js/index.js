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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo




/* nav Bar */

// const navBar = document.querySelector("nav").style.color = "green";

const navText = document.querySelectorAll("a");
navText[0].textContent = siteContent["nav"]["nav-item-1"];
navText[1].textContent = siteContent["nav"]["nav-item-2"];
navText[2].textContent = siteContent["nav"]["nav-item-3"];
navText[3].textContent = siteContent["nav"]["nav-item-4"];
navText[4].textContent = siteContent["nav"]["nav-item-5"];
navText[5].textContent = siteContent["nav"]["nav-item-6"];


//Logo Image
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/* CTA */

//CTA IMAGE
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];



/* main Content */


// top section titles
const topTitles = document.querySelectorAll(".top-content .text-content h4");

topTitles[0].textContent = siteContent['main-content']['about-h4'];
topTitles[1].textContent = siteContent['main-content']['features-h4'];

//top section content
const featuresContent = document.querySelectorAll(".top-content .text-content p");

featuresContent[0].textContent = siteContent["main-content"]["features-content"];
featuresContent[1].textContent = siteContent["main-content"]['about-content'];


//Main Content Image

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//bottom section

//Bottom Section Titles
const bottomTitle = document.querySelectorAll(".bottom-content .text-content h4");

bottomTitle[0].textContent = siteContent["main-content"]['services-h4'];
bottomTitle[1].textContent = siteContent["main-content"]['product-h4'];
bottomTitle[2].textContent = siteContent["main-content"]['vision-h4'];


//Bottom Section content
const bottomContent = document.querySelectorAll(".bottom-content .text-content p");

bottomContent[0].textContent = siteContent['main-content']['services-content'];
bottomContent[1].textContent = siteContent['main-content']['product-content'];
bottomContent[2].textContent = siteContent['main-content']['vision-content'];

/* Contact Section */
const titleH4 = document.querySelectorAll('.contact h4');

titleH4[0].textContent = siteContent['contact']['contact-h4'];


const contactH4 = document.querySelectorAll('.contact p');
contactH4[0].textContent = siteContent['contact']['email'];
contactH4[1].textContent = siteContent['contact']['phone'];
contactH4[2].textContent = siteContent['contact']['address'];