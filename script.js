document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simula la autenticación exitosa
    setTimeout(function() {
        alert('Sesión iniciada');
        // Redirigir a la página principal
        window.location.href = 'index.html';
    }, 1000); // Cambia el tiempo a tu preferencia
});