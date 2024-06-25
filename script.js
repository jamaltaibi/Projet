const modalTriggers = document.querySelectorAll('.modal-trigger');
const modal = document.getElementById("myModal");

modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        modal.style.display = "block"; 
    });
});

const closeBt = document.querySelector('.close');

closeBt.addEventListener('click', function() {
    modal.style.display = "none";
});
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
});
