import { connect } from "http2";

enum DiaSemana{
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sabado = "Sabado",
    Domingo = "Domingo",
}

function obtenerDiaSemana(dia: DiaSemana):string{
    return `El dia de hoy es ${dia}`;

}

let dia = DiaSemana.Lunes
console.log(obtenerDiaSemana(dia));
dia =DiaSemana.Martes;
console.log(obtenerDiaSemana(dia));