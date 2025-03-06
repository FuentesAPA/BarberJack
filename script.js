document.getElementById("formCita").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    
    if (nombre && fecha && hora) {
        alert(`Cita reservada para ${nombre} el ${fecha} a las ${hora}.`);
    } else {
        alert("Por favor completa todos los campos.");
    }
});
