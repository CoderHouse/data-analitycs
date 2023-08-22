// var modal = document.getElementById("myModal");
// var btn = document.getElementById("openModal");
// var span = document.getElementById("closeModal");

// btn.onclick = function() {
//   console.log('pruebas');
//   modal.style.display = "block";
//   modal.style.height = "100vh";
//   modal.style.position = "relative";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Cerrar el modal con la tecla "Esc"
// document.addEventListener('keydown', function(event) {
//   if (event.key === "Escape" && modal.style.display == "block") {  
//     modal.style.display = "none";
//   }
// });

var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".openModal"); // Obtiene todos los botones con la clase "openModal"
var span = document.getElementById("closeModal");
var iframe = document.getElementById("iframeModal");

// Abre el modal y establece el contenido del iframe
btns.forEach(function(btn) {
  btn.onclick = function() {
    var link = this.getAttribute('data-link'); // Obtiene el atributo data-link del botón
    iframe.src = link; // Establece la URL del iframe
    modal.style.display = "block";
    modal.style.height = "100vh";
    modal.style.position = "relative";
  };
});

// Cierra el modal
span.onclick = function() {
  modal.style.display = "none";
  iframe.src = ""; // Limpiar el contenido del iframe
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = ""; // Limpiar el contenido del iframe
  }
}

// Cierra el modal con la tecla "Esc"
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape" && modal.style.display == "block") {
    modal.style.display = "none";
    iframe.src = ""; // Limpiar el contenido del iframe
  }
});
