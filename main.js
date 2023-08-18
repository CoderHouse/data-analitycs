var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

btn.onclick = function() {
  console.log('pruebas');
  modal.style.display = "block";
  modal.style.height = "100vh";
  modal.style.position = "relative";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Cerrar el modal con la tecla "Esc"
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape" && modal.style.display == "block") {  
    modal.style.display = "none";
  }
});