function getFormvalue(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form by ID
    const form = document.getElementById('form1');
    
    // Get input values by name
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    
    // Validate inputs
    if (!firstName || !lastName) {
        alert('Please enter both first name and last name.');
        return;
    }
    
    // Alert first name and last name
    alert(`${firstName} ${lastName}`);
}
document.getElementById('form1').addEventListener('submit', getFormvalue)

