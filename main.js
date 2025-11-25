document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const result = document.getElementById("result");

    if (!nombre || !correo || !mensaje) {
        result.textContent = "Por favor completa todos los campos.";
        result.style.color = "red";
        return;
    }

    result.textContent = "Mensaje enviado (modo demostración).";
    result.style.color = "green";
    this.reset();
});
