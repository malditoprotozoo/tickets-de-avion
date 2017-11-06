var airlineSeats = [false, false, false, false, false, false, false, false, false, false];

function bookTicket() {
    var answer = prompt("¿En qué zona prefieres reservar tu asiento? \n 1. Primera Clase \n 2. Clase Económica \n Por favor, ingresa el número");
    if (answer !== "") {
        if (answer === "1") {
            firstClass();
        } else if (answer === "2") {
            economyClass();
        } else {
            alert("Esa no es una opción válida.");
        }
    }
};

function firstClass() {
	for (var i = 0; i < 4; i++) {
		if (airlineSeats[i] === false) {
			airlineSeats[i] = true;
			document.getElementsByTagName("td")[i].setAttribute("class", "occupied");
				var ticket = document.getElementsByTagName("td")[i].dataset.number;
				var printedTicketTitle = document.createElement("p");
				var title = document.createTextNode("Pase de Abordar");
				var printedTicketContent = document.createElement("span");
				var content = document.createTextNode("No. de asiento: " + ticket + ".");
				printedTicketTitle.appendChild(title);
				printedTicketContent.appendChild(content);
				var where = document.getElementById("printed-tickets");
				where.appendChild(printedTicketTitle);
				where.appendChild(printedTicketContent);
			break;
		} else if (i == 3 && airlineSeats[i] === true) {
			reasignEconomyClass();
		}
	}
};

function economyClass() {
	for (var i = 4; i < 10; i++) {
		if (airlineSeats[i] === false) {
			airlineSeats[i] = true;
			document.getElementsByTagName("td")[i].setAttribute("class", "occupied");
			var ticket = document.getElementsByTagName("td")[i].dataset.number;
			var printedTicketTitle = document.createElement("p");
			var title = document.createTextNode("Pase de Abordar");
			var printedTicketContent = document.createElement("span");
			var content = document.createTextNode("No. de asiento: " + ticket + ".");
			printedTicketTitle.appendChild(title);
			printedTicketContent.appendChild(content);
			var where = document.getElementById("printed-tickets");
			where.appendChild(printedTicketTitle);
			where.appendChild(printedTicketContent);
			break;
		} else if (i == 9 && airlineSeats[i] === true) {
			reasignFirstClass();
		}
	}
};

function reasignEconomyClass() {
	var reasign = confirm("Ya no quedan asientos disponibles en Primera Clase. ¿Te gustaría reservar un asiento en la Clase Económica?");
	if (reasign === true) {
		economyClass();
	} else {
		nextFlight();
	}
};

function reasignFirstClass() {
	var reasign = confirm("Ya no quedan asientos disponibles en Clase Económica. ¿Te gustaría reservar un asiento en la Primera Clase?");
	if (reasign === true) {
		economyClass();
	} else {
		nextFlight();
	}
};

function nextFlight() {
	alert("Nuestro próximo vuelo sale en 3 horas :)")
};

/*function printTicket() {
	var paragraph = document.createElement("p");
	var printedTicketTitle = document.createTextNode("Pase de Abordar");
	var printedTicketContent = document.createTextNode("No. de asiento: " + ticket + ".");

}*/

