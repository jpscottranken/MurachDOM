/*
		This exercise has you make a minor modification to 
		the FAQs application. 
		
		When you're done, this application should work the 
		same as before, except that only one answer can be 
		displayed at a time. 
		
		In other words, when the user clicks on a heading 
		to display the answer, the other answers must be 
		hidden.
*/

// the event handler for the click event of each h2 element
const toggle = evt => {
	const h2Element = evt.currentTarget;               // get the clicked h2
    const divElement = h2Element.nextElementSibling;   // get h2's sibling div
    
    // remove any class attributes from all other h2 nodes and sibling div nodes
    const h2Elements = h2Element.parentNode.querySelectorAll("h2");
    for (let h2 of h2Elements) {
        if(h2 != h2Element) {
            h2.classList.remove("minus");
            h2.nextElementSibling.classList.remove("open");
        }
    }
    
    // toggle clicked h2 and sibling div
	h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");
	
	evt.preventDefault();           // cancel default action of h2's child <a>
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}
	
	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
});