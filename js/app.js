/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * References:
 * Query Selector: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/acfca0fb-3671-427d-a5e2-2e1e4f92cd14/concepts/5ce62fbd-5ae8-4461-b394-bb93af3eb422
 * 
 * Arrays, For loops, Iterables: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/25d1aaca-ce19-46fb-aa49-bdf053a1b5c8/concepts/c5335868-45cd-4570-9b79-451e532e7828
 * 
 * Array properties (.from): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
/**
 * Define Global Variables
 * 
 * (I went with const instead of let here because these variables should 
 * remain static.)
*/


/* Create an array of the 'section' blocks to be defactored later. */
const sections = Array.from(document.querySelectorAll("section"));

/* Create a variable that gets the navBar by ID */
const navBar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/*
build the nav

Uses iteration to go through the content of 'sections' and turn them into
usable links that will populate the navBar.

References:
For...of Loop:
https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/25d1aaca-ce19-46fb-aa49-bdf053a1b5c8/concepts/ffbc4295-54d7-4e3d-a444-62d2f6e09f84

Data / getAttribute:
https://www.w3schools.com/tags/att_data-.asp

createElement:
https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/9abd4182-4a6b-4aa2-93fc-6b01c7417012/concepts/ffaea72a-8c5f-486f-9b22-72503ceaec37

innerHTML:
https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/9abd4182-4a6b-4aa2-93fc-6b01c7417012/concepts/b2604f06-6132-4e7e-8f48-2b249e370c0b

Template literals:
https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/25d1aaca-ce19-46fb-aa49-bdf053a1b5c8/concepts/3947a869-07b6-4a2f-9654-e37e5e1a3cd8

Appending the links to the navBar:
https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/9abd4182-4a6b-4aa2-93fc-6b01c7417012/concepts/ffaea72a-8c5f-486f-9b22-72503ceaec37
*/
const buildNavbar = () =>{
    for (const section of sections) {
        /*
        data-nav was used instead of id for navName because it already
        displays correctly ('Section 1'). Id would have required code to
        add spaces and capitalization. 'let' was used because the names
        and links will vary between sections.
        */
        navName = section.getAttribute("data-nav");
        navLink = section.getAttribute("id");

        /*
        For each 'section' that is found, a list item is created that
        serves as the tab in the navbar to that 'section'.
        */
        navTab = document.createElement("li")

        /*
        Use the Name and Link from above to create an Anchor link
        between the navbar tab and the corresponding 'section'.
        The anchor class 'menu_link' was already in the starter CSS file,
        so it was used here for consistency and time-saving.
        */
        navTab.innerHTML = `<a href="#${navLink}" class="menu__link">${navName}</a>`;

        /* Append the new links to the empty navBar */
        navBar.appendChild(navTab);
    }
}


/* 
Add class 'active' to section when near top of viewport


References:
getBoundingClientRect():
https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

Knowledge Post: 
https://knowledge.udacity.com/questions/85408

How to check if you are in viewport: 
https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

Adding a class to an element:
https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
*/

/* Check if an element is within the designated viewport parameters */
const withinViewPort = (element) => {
    let screen = element.getBoundingClientRect();
    return (
        screen.top >= 0 && 
        screen.left >= 0 && 
        screen.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        screen.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/* 
Checks if element is within viewport and then appends the active class
to it if so. Because there was already a substantial chunk of CSS code 
written in the original starter code, The class 'your-active-class' was 
left intact for time-saving and consistency with styling.
*/
const migrateActiveClass = () => {

    /* Iterate through each section */
    for (const section of sections) {

        /* If within the viewport, add the active class to section */
        if (withinViewPort(section)) {
            section.classList.add("your-active-class");
            } 
        
        /* Otherwise, remove the active class from the section */
        else {
            section.classList.remove("your-active-class");
        }
    }
}




// Scroll to anchor ID using scrollTO event
/* 
References:

scrollIntoView:
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

Knowledge post:
https://knowledge.udacity.com/questions/777807
*/
const anchorScroll = (navTab, section) => {
    navTab.addEventListener("click", function(event) {
        event.preventDefault();
        section.scrollIntoView ({behavior: "smooth"})
});
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

// Scroll to section on link click
anchorScroll();

// Set sections as active
/*
References:

Adding event listeners:
https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/697ff796-a9d1-4eda-854a-b3d018ab4a67/concepts/49624782-5363-43ae-914a-83263fc6b0e0
*/

document.addEventListener("scroll", migrateActiveClass);

