function openNewsletter() {
    document.getElementById("newsletterModal").style.display = "flex";
}

function closeNewsletter() {
    document.getElementById("newsletterModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("newsletterModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

window.onload = function() {
    setTimeout(function() {
        openNewsletter();  
    }, 10000); 
}
