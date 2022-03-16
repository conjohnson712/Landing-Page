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
 */

/**
 * Define Global Variables
 * 
*/

/*Create a variable for getting the dynamic sections*/
const sections = document.querySelectorAll('section');

/*Create an empty list to store the navbar list items*/
const navList = []

/*Create a variable for getting the navBar by ID */
const navBar = document.getElementById('navbar_list');

/* Determines the number of navBar items by finding the number of 'sections'*/
let navCount = sections.length


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
function buildNav() {

}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


