class usuario {
	constructor(usuario) {
		this.codigo = usuario[0];
		this.password = usuario[1];
		this.usrtipo = usuario[2];
	}
}

class Alumno {
	constructor(alumno) {
		this.codigo = alumno[0];
		this.nombre = alumno[1];
		this.apellidos = alumno[2];
		this.dni = alumno[3];
		this.cursos = alumno[4];
	}
}

class Profesor {
	constructor(profesor) {
		this.codigo = profesor[0];
		this.nombre = profesor[1];
		this.apellido = profesor[2];
	}
}

class Curso {
	constructor(curso) {
		this.codigo = curso[0];
		this.nombre = curso[1];
		this.horario = curso[2];
		this.profesor = curso[3];
	}
}

const usuarios = [
	{ codigo: 1, password: 123456789, tipo: 'A' },
	{ codigo: 2, password: 123456789, tipo: 'A' },
	{ codigo: 3, password: 123456789, tipo: 'A' },
	{ codigo: 4, password: 123456789, tipo: 'A' },
	{ codigo: 5, password: 123456789, tipo: 'A' },
	{ codigo: 6, password: 123456789, tipo: 'A' },
	{ codigo: 7, password: 123456789, tipo: 'A' },
	{ codigo: 8, password: 123456789, tipo: 'P' },
	{ codigo: 9, password: 123456789, tipo: 'P' },
	{ codigo: 10, password: 123456789, tipo: 'P' },
	{ codigo: 11, password: 123456789, tipo: 'P' },
	{ codigo: 12, password: 123456789, tipo: 'SU' },
	{ codigo: 13, password: 123456789, tipo: 'A' },
	{ codigo: 14, password: 123456789, tipo: 'A' },
	{ codigo: 15, password: 123456789, tipo: 'A' },
	{ codigo: 16, password: 123456789, tipo: 'A' },
	{ codigo: 17, password: 123456789, tipo: 'A' },
	{ codigo: 18, password: 123456789, tipo: 'A' },
	{ codigo: 19, password: 123456789, tipo: 'A' },
	{ codigo: 20, password: 123456789, tipo: 'A' },
	{ codigo: 21, password: 123456789, tipo: 'A' },
	{ codigo: 22, password: 123456789, tipo: 'A' },
	{ codigo: 23, password: 123456789, tipo: 'A' },
	{ codigo: 24, password: 123456789, tipo: 'A' },
	{ codigo: 25, password: 123456789, tipo: 'A' },
	{ codigo: 26, password: 123456789, tipo: 'A' },
	{ codigo: 27, password: 123456789, tipo: 'A' },
	{ codigo: 28, password: 123456789, tipo: 'A' },
	{ codigo: 29, password: 123456789, tipo: 'A' },
	{ codigo: 30, password: 123456789, tipo: 'A' },
	{ codigo: 31, password: 123456789, tipo: 'A' },
	{ codigo: 32, password: 123456789, tipo: 'A' },
	{ codigo: 33, password: 123456789, tipo: 'A' },
	{ codigo: 34, password: 123456789, tipo: 'A' },
	{ codigo: 35, password: 123456789, tipo: 'A' },
	{ codigo: 36, password: 123456789, tipo: 'A' },
	{ codigo: 37, password: 123456789, tipo: 'A' },
	{ codigo: 38, password: 123456789, tipo: 'A' },
	{ codigo: 39, password: 123456789, tipo: 'A' },
	{ codigo: 40, password: 123456789, tipo: 'A' },
];

const Alumnos = [
	{ codigo: 1, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 2, 3, 4, 5] },
	{ codigo: 2, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [6, 7, 8, 9, 10] },
	{ codigo: 3, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 4, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 5, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 6, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 7, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 13, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 14, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 15, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 16, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 17, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 18, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 19, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 20, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 21, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 22, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 23, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 24, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 25, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 26, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 27, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 28, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 29, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 30, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 31, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 32, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 33, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 34, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 35, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 36, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 37, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 38, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 39, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 40, nombre: 'A', apellidos: 'B C', dni: 12345678, cursos: [0, 1, 1, 1, 1] },
];

const cursos = [
	{ codigo: 1, nombre: 'Matematica', horario: 'A', profesor: 8 },
	{ codigo: 2, nombre: 'Matematica', horario: 'B', profesor: 9 },
	{ codigo: 3, nombre: 'Comunicacion', horario: 'A', profesor: 10 },
	{ codigo: 4, nombre: 'Comunicacion', horario: 'B', profesor: 11 },
	{ codigo: 5, nombre: 'Historia', horario: 'A', profesor: 8 },
	{ codigo: 6, nombre: 'Historia', horario: 'B', profesor: 9 },
	{ codigo: 7, nombre: 'Economia', horario: 'A', profesor: 10 },
	{ codigo: 8, nombre: 'Economia', horario: 'B', profesor: 11 },
	{ codigo: 9, nombre: 'Programacion', horario: 'A', profesor: 8 },
	{ codigo: 10, nombre: 'Programacion', horario: 'B', profesor: 9 },
];

const profesores = [
	{ codigo: 8, nombre: 'Antonio', apellido: 'Morales' },
	{ codigo: 9, nombre: 'Andres', apellido: 'Salas' },
	{ codigo: 10, nombre: 'Manuel', apellido: 'Zumaran' },
	{ codigo: 11, nombre: 'Jose', apellido: 'Barboza' },
];

const profesoresenJSON = JSON.stringify(profesores);
const cursosenJSON = JSON.stringify(cursos);
const AlumnosenJSON = JSON.stringify(Alumnos);
const usuariosenJSON = JSON.stringify(usuarios);

localStorage.setItem('profesores', profesoresenJSON);
localStorage.setItem('cursos', cursosenJSON);
localStorage.setItem('alumnos', AlumnosenJSON);
localStorage.setItem('usuarios', usuariosenJSON);
