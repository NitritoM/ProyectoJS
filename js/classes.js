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
	{ codigo: 1, password: 123456789, tipo: "A" },
	{ codigo: 2, password: 123456789, tipo: "A" },
	{ codigo: 3, password: 123456789, tipo: "A" },
	{ codigo: 4, password: 123456789, tipo: "A" },
	{ codigo: 5, password: 123456789, tipo: "A" },
	{ codigo: 6, password: 123456789, tipo: "A" },
	{ codigo: 7, password: 123456789, tipo: "A" },
	{ codigo: 8, password: 123456789, tipo: "P" },
	{ codigo: 9, password: 123456789, tipo: "P" },
	{ codigo: 10, password: 123456789, tipo: "P" },
	{ codigo: 11, password: 123456789, tipo: "P" },
	{ codigo: 12, password: 123456789, tipo: "SU" },
	{ codigo: 13, password: 123456789, tipo: "A" },
	{ codigo: 14, password: 123456789, tipo: "A" },
	{ codigo: 15, password: 123456789, tipo: "A" },
	{ codigo: 16, password: 123456789, tipo: "A" },
	{ codigo: 17, password: 123456789, tipo: "A" },
	{ codigo: 18, password: 123456789, tipo: "A" },
	{ codigo: 19, password: 123456789, tipo: "A" },
	{ codigo: 20, password: 123456789, tipo: "A" },
	{ codigo: 21, password: 123456789, tipo: "A" },
	{ codigo: 22, password: 123456789, tipo: "A" },
	{ codigo: 23, password: 123456789, tipo: "A" },
	{ codigo: 24, password: 123456789, tipo: "A" },
	{ codigo: 25, password: 123456789, tipo: "A" },
	{ codigo: 26, password: 123456789, tipo: "A" },
	{ codigo: 27, password: 123456789, tipo: "A" },
	{ codigo: 28, password: 123456789, tipo: "A" },
	{ codigo: 29, password: 123456789, tipo: "A" },
	{ codigo: 30, password: 123456789, tipo: "A" },
	{ codigo: 31, password: 123456789, tipo: "A" },
	{ codigo: 32, password: 123456789, tipo: "A" },
	{ codigo: 33, password: 123456789, tipo: "A" },
	{ codigo: 34, password: 123456789, tipo: "A" },
	{ codigo: 35, password: 123456789, tipo: "A" },
	{ codigo: 36, password: 123456789, tipo: "A" },
	{ codigo: 37, password: 123456789, tipo: "A" },
	{ codigo: 38, password: 123456789, tipo: "A" },
	{ codigo: 39, password: 123456789, tipo: "A" },
	{ codigo: 40, password: 123456789, tipo: "A" },
];

const Alumnos = [
	{ codigo: 1, nombre: "Andres", apellidos: "A B", dni: 12345678, cursos: [1, 0, 0, 1, 1] },
	{ codigo: 2, nombre: "Manuel", apellidos: "C D", dni: 12345678, cursos: [1, 0, 1, 0, 1] },
	{ codigo: 3, nombre: "Julio", apellidos: "E F", dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 4, nombre: "Ernesto", apellidos: "G H", dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 5, nombre: "Jose", apellidos: "I J", dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 6, nombre: "Roberto", apellidos: "K L", dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 7, nombre: "Victor", apellidos: " M N", dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 13, nombre: "Dunia", apellidos: "O P", dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 14, nombre: "Raquel", apellidos: "Q R", dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 15, nombre: "Paola", apellidos: " S T", dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 16, nombre: "Maria", apellidos: "U V", dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 17, nombre: "Almendra", apellidos: "W X", dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 18, nombre: "Mayra", apellidos: "Y Z", dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 19, nombre: "MildredA", apellidos: "A C", dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 20, nombre: "Pamela", apellidos: "B D", dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 21, nombre: "Milena", apellidos: "G C", dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 22, nombre: "Eliana", apellidos: "J C", dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 23, nombre: "Jose", apellidos: "B U", dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 24, nombre: "Otilia", apellidos: "K C", dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 25, nombre: "Vidal", apellidos: "Arias Ramos", dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 26, nombre: "Isa", apellidos: "Vega Lucas", dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 27, nombre: "Natanael", apellidos: "Viñas Guitart", dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 28, nombre: "Carmen", apellidos: "Bueno Torrens", dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 29, nombre: "Lidia", apellidos: "Escamilla Checa", dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 30, nombre: "Clementina", apellidos: "de Zamorano", dni: 12345678, cursos: [1, 1, 1, 1, 1] },
	{ codigo: 31, nombre: "Agapito", apellidos: "Neira-Crespo", dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 32, nombre: "Ricarda", apellidos: "Modesta Acedo Flores", dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 33, nombre: "Luís", apellidos: "de Checa", dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 34, nombre: "Anna", apellidos: "Duarte Barrena", dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 35, nombre: "Eugenia", apellidos: "Bernat-Rodriguez", dni: 12345678, cursos: [0, 1, 1, 1, 1] },
	{ codigo: 36, nombre: "Eusebia", apellidos: "Sevilla Lobato", dni: 12345678, cursos: [1, 1, 1, 1, 0] },
	{ codigo: 37, nombre: "AnselmaA", apellidos: "Peña Echevarría", dni: 12345678, cursos: [1, 1, 1, 0, 1] },
	{ codigo: 38, nombre: "Jennifer", apellidos: "Rico Cantón", dni: 12345678, cursos: [1, 1, 0, 1, 1] },
	{ codigo: 39, nombre: "Alejandra", apellidos: "del Tapia", dni: 12345678, cursos: [1, 0, 1, 1, 1] },
	{ codigo: 40, nombre: "Federico", apellidos: "Sarabia Viñas", dni: 12345678, cursos: [0, 1, 1, 1, 1] },
];

const cursos = [
	{ codigo: 1, nombre: "Matematica", horario: "A", profesor: 8 },
	{ codigo: 2, nombre: "Matematica", horario: "B", profesor: 9 },
	{ codigo: 3, nombre: "Comunicacion", horario: "A", profesor: 10 },
	{ codigo: 4, nombre: "Comunicacion", horario: "B", profesor: 11 },
	{ codigo: 5, nombre: "Historia", horario: "A", profesor: 8 },
	{ codigo: 6, nombre: "Historia", horario: "B", profesor: 9 },
	{ codigo: 7, nombre: "Economia", horario: "A", profesor: 10 },
	{ codigo: 8, nombre: "Economia", horario: "B", profesor: 11 },
	{ codigo: 9, nombre: "Programacion", horario: "A", profesor: 8 },
	{ codigo: 10, nombre: "Programacion", horario: "B", profesor: 9 },
];

const profesores = [
	{ codigo: 8, nombre: "Antonio", apellido: "Morales" },
	{ codigo: 9, nombre: "Andres", apellido: "Salas" },
	{ codigo: 10, nombre: "Manuel", apellido: "Zumaran" },
	{ codigo: 11, nombre: "Jose", apellido: "Barboza" },
];

const profesoresenJSON = JSON.stringify(profesores);
const cursosenJSON = JSON.stringify(cursos);
const AlumnosenJSON = JSON.stringify(Alumnos);
const usuariosenJSON = JSON.stringify(usuarios);

localStorage.setItem("profesores", profesoresenJSON);
localStorage.setItem("cursos", cursosenJSON);
localStorage.setItem("alumnos", AlumnosenJSON);
localStorage.setItem("usuarios", usuariosenJSON);
