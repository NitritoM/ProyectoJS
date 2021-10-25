const logedUser = JSON.parse(localStorage.getItem("logUser"));
const auxAlumnos = JSON.parse(localStorage.getItem("alumnos"));

let results = auxAlumnos.filter(function (aux) {
	return aux.codigo == logedUser.codigo;
});

let auxAlumno = results.length > 0 ? results[0] : null;
document.getElementById('txtNombre').value  = auxAlumno.nombre;
document.getElementById('txtApellido').value  = auxAlumno.apellidos;
document.getElementById('txtDNI').value  = auxAlumno.dni;

