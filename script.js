function getFormvalue(event) {
    event.preventDefault(); 
    const form = event.target;
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    alert(`${firstName} ${lastName}`);
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    if (form) {
        form.addEventListener('submit', getFormvalue);
        console.log('Event listener attached to form');
    } else {
        console.error('Form with id "form1" not found');
    }
});

