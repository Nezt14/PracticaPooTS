enum nivelAcademico{
    Primaria= "Primaria",
    Secundaria= "Secundaria",
    Universidad = "Universidad"
}

type alumno ={
    nombre: string,
    edad: number
    nivelAcademico:nivelAcademico
}

let alumno1:alumno = {nombre:"Nestor", edad:23, nivelAcademico:nivelAcademico.Secundaria}
let alumno2:alumno = {nombre:"Manuel", edad:22, nivelAcademico:nivelAcademico.Universidad}

console.log(alumno1)
console.log(alumno2)