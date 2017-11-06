function bookTicket() {
	var answer = prompt("¿En qué zona prefieres reservar tu asiento? \n 1. Primera Clase \n 2. Clase Económica");
	if (answer !== "") {
		if (answer === "1") {
			firstClass();
		} else if (answer === "2") {
			economyClass();
		} else {
			alert("Esa no es una opción válida.");
		}
	}
}

function firstClass() {

}