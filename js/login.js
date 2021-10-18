let enviar = document.getElementById("enviar");
const auxUsuarios = JSON.parse(localStorage.getItem("usuarios"));

function cargarEventListeners() {
	// usamos el ID con getElementById
	enviar.addEventListener("click", Comprobar);
}
function Comprobar() {
	let txtUsr = document.getElementById("usr");
	let txtPss = document.getElementById("pss");
	let results = auxUsuarios.filter(function (aux) {
		return aux.codigo == txtUsr.value;
	});

	let auxUsuario = results.length > 0 ? results[0] : null;

	if (auxUsuario != null) {
		if (auxUsuario.password != txtPss.value) {
			$("body").append(`<div><h3> ID: ${auxUsuario.codigo}</h3> <p>  Contraseña: Incorrecta</p></div>`);

		} else {
			const logUsuarioenJSON = JSON.stringify(auxUsuario);
			localStorage.setItem("logUser", logUsuarioenJSON);
			var configuracion_ventana = "target=viewer";
			//Se supone que esta pagina se deberia abrir en el Iframe del index pero no se como se puede hacer eso

			window.open("../pages/main.html","_self");
			parent.document.getElementById(window.name);
			$("body").append(`<div><h3> ID: ${auxUsuario.codigo}</h3> <p>  Contraseña: ${auxUsuario.password}</p><b> Tipo ${auxUsuario.tipo}</b></div>`);
		}
	} else {
		$("body").append(`<div><h3> Usiario no Existe</h3></div>`);

	}
}

cargarEventListeners();
