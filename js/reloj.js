/* //Este metodo me ayuda a ejecutar una funcion despues de un tiempo en milisegundos
window.setTimeout(saludar, 4000)

function saludar() {
    alert("Feliz cumple Mariano!!!!");
} */



/* let contador = 1;
let tiempo = window.setInterval(contar, 500);

function contar() {
    document.write(contador + "<br>");
    contador++;
    if (contador > 15) {
        clearInterval(tiempo);
    }
} */


function crearHora() {
    let fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        anio = fecha.getFullYear();

    //Enviar al html las variables

    let parrafDiaSemana = document.getElementById("diaSemana"),
        parrafDia = document.getElementById("dia"),
        parrafMes = document.getElementById("mes"),
        parrafAnio = document.getElementById("anio");

    //asignar valores a los objetos del html

    parrafDia.innerText = dia;
    parrafAnio.innerText = anio;

    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    parrafDiaSemana.innerText = semana[diaSemana];
    parrafMes.innerText = meses[mes];

    //Obtener los objetos del html

    let parrafHora = document.getElementById("hora"),
        parrafMinutos = document.getElementById("minutos"),
        parrafSegundos = document.getElementById("segundos"),
        parrafAmPm = document.getElementById("ampm");

        if(hora < 12){
            parrafAmPm.innerText = "am";
        }else{
            parrafAmPm.innerText = "pm";
            hora = hora - 12;
        }

    if (segundos < 10) {
        parrafSegundos.innerText = "0" + segundos;
    } else {
        parrafSegundos.innerText = segundos;
    }

    if (minutos < 10) {
        parrafMinutos.innerText = "0" + minutos;
    } else {
        parrafMinutos.innerText = minutos;
    }

    if (hora < 10) {
        parrafHora.innerText = "0" + hora;
    } else {
        parrafHora.innerText = hora;
    }

    
}

window.setInterval(crearHora);

function cambiarColor(){
    let section = document.getElementById("section");
    if(section.className.includes("retro1") == true){
        section.className = "w-75 retro2 d-flex flex-column justify-content-center";
    }else if(section.className.includes("retro2") == true){
        section.className = "w-75 retro3 d-flex flex-column justify-content-center";
    }else{
        section.className = "w-75 retro1 d-flex flex-column justify-content-center";
    }
}