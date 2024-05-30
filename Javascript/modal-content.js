document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal element
    const modal = document.querySelector('.modal');
    // Get the close button (SVG) inside the modal button
    const closeButton = document.querySelector('.modal-button .icon-close');
    // Get the footer button element
    const footerButton = document.querySelector('.footer-button');

    // Log the elements to check if they are correctly selected
    console.log('Modal:', modal);
    console.log('Close Button:', closeButton);
    console.log('Footer Button:', footerButton);


    // Add an event listener to the close button
    closeButton.addEventListener('click', () => {
        console.log('Close button clicked');
        // Hide the modal by setting display to 'none'
        modal.style.display = 'none';
    });

    // Add an event listener to the footer button
    footerButton.addEventListener('click', () => {
        console.log('Footer button clicked');
        // Show the modal by setting display to 'block'
        modal.style.display = 'block';
    });
});
// Define footerButton and modal outside the event listener
const footerButton = document.querySelector('.footer-button');
const modal = document.querySelector('.modal');

// Check if footerButton and modal are successfully selected
if (footerButton && modal) {
    footerButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button behavior

        // Code to show the modal
        modal.classList.add('show'); // Assuming 'show' class adds styles to display the modal
    });
} else {
    console.error('footerButton or modal not found');
}
