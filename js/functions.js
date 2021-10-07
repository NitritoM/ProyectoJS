

class Alumno {
	constructor(nombre, notaH, notaM, notaC, notaP, notaE) {
		this.nombre = nombre;
		this.notaH = notaH;
		this.notaM = notaM;
		this.notaC = notaC;
		this.notaP = notaP;
		this.notaE = notaE;
	}
	promedio() {
		let promalum = parseInt(this.notaH) + parseInt(this.notaM) + parseInt(this.notaC) + parseInt(this.notaP) + parseInt(this.notaE);
		alert('el promedio del alumno ' + this.nombre + ' es: ' + promalum / 5);
	}
}


let nro_alumnos = prompt('Ingrese numero de alumnos');
let alumnos = [];
let auxAlumno;
let nombre;
let notaH;
let notaM;
let notaC;
let notaP;
let notaE;

let promnotaH = 0;
let promnotaM = 0;
let promnotaC = 0;
let promnotaP = 0;
let promnotaE = 0;

function ingresar_notas(nro_alumnos) {
	for (i = 0; i < nro_alumnos; i++) {
		nombre = prompt('Ingrese el nombre del Alumno');
		notaH = prompt('ingrese la nota de Historia');
		notaM = prompt('ingrese la nota de Matematica');
		notaC = prompt('ingrese la nota de Comunicacion');
		notaP = prompt('ingrese la nota de Programacion');
		notaE = prompt('ingrese la nota de Economia');
		auxAlumno = new Alumno(nombre, notaH, notaM, notaC, notaP, notaE);
		alumnos.push(auxAlumno);
	}
}

function pro_alumnos() {
	for (i = 0; i < alumnos.length; i++) {
		alumnos[i].promedio();
	}
}

function pro_curso() {
	for (i = 0; i < alumnos.length; i++) {
		promnotaH = promnotaH + parseInt(alumnos[i].notaH);
		promnotaM = promnotaM + parseInt(alumnos[i].notaM);
		promnotaC = promnotaC + parseInt(alumnos[i].notaC);
		promnotaP = promnotaP + parseInt(alumnos[i].notaP);
		promnotaE = promnotaE + parseInt(alumnos[i].notaE);
	}
	alert('El promedio en el curso de Historia ' + promnotaH / alumnos.length);
	alert('El promedio en el curso de Matematica ' + promnotaM / alumnos.length);
	alert('El promedio en el curso de Comunicacion ' + promnotaC / alumnos.length);
	alert('El promedio en el curso de Programacion ' + promnotaP / alumnos.length);
	alert('El promedio en el curso de Economia ' + promnotaE / alumnos.length);
}

ingresar_notas(nro_alumnos);
pro_alumnos();
pro_curso();