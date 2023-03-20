const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
	const nombre = prompt('Ingrese su nombre:');
    if (nombre == null || nombre == "" )
    {
        alert('No ha completado correctamente el campo. Intente de nuevo.');
    } else {
        alert('¡Hola ' + nombre + ' !');
    }
	    
});
