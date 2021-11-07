const logedUser = JSON.parse(localStorage.getItem("logUser"));
const auxAlumnos = JSON.parse(localStorage.getItem("alumnos"));

let results = auxAlumnos.filter(function (aux) {
	return aux.codigo == logedUser.codigo;
});

let auxAlumno = results.length > 0 ? results[0] : null;
document.getElementById('txtNombre').value  = auxAlumno.nombre;
document.getElementById('txtApellido').value  = auxAlumno.apellidos;
document.getElementById('txtDNI').value  = auxAlumno.dni;

function cursosInscritos(){
	if (auxAlumno.cursos[0]){
		document.getElementById('txtMatematica').value = "Inscrito";
	}
	else{
		document.getElementById('txtMatematica').value = "No Inscrito";
	}

	if (auxAlumno.cursos[1]){
		document.getElementById('txtHistoria').value = "Inscrito";
	}
	else{
		document.getElementById('txtHistoria').value = "No Inscrito";
	}

	if (auxAlumno.cursos[2]){
		document.getElementById('txtComu').value = "Inscrito";
	}
	else{
		document.getElementById('txtComu').value = "No Inscrito";
	}

	if (auxAlumno.cursos[3]){
		document.getElementById('txtEcono').value = "Inscrito";
	}
	else{
		document.getElementById('txtEcono').value = "No Inscrito";
	}

	if (auxAlumno.cursos[4]){
		document.getElementById('txtProgra').value = "Inscrito";
	}
	else{
		document.getElementById('txtProgra').value = "No Inscrito";
	}
}

cursosInscritos();

