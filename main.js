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
btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var link = this.getAttribute('data-link'); // Obtiene el atributo data-link del botón
    iframe.src = link; // Establece la URL del iframe

    // Obtiene la posición del botón
    const rect = btn.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;

    // Establece la posición del modal encima del botón
    modal.style.display = "block";
    modal.style.top = top + "px";
    modal.style.left = "20%";
    modal.style.height = "100vh";
    modal.style.width = "auto";
    const ancho = modal.offsetWidth;
    console.log("Ancho del div:", ancho, "px");
    // modal.style.position = "absolute";
  });
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
