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

/*Create a variable for getting the navBar by ID */
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

// build the nav
/*
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
function buildNavbar() {
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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

// Scroll to section on link click

// Set sections as active


