enum EstadoPedido{
    Pentiente = "Pendiente",//0
    EnProceso ="En proceso" ,//1
    Finalizado ="Entegado" //2
}

let estado: EstadoPedido = EstadoPedido.Pentiente

console.log(estado);//0

estado = EstadoPedido.EnProceso
console.log(estado);

type User ={
    id:Number;
    name: string
    email: string
}

let usuario1:User = {id:1, name: "nestor", email:"Nest@gmail.com" }
console.log(usuario1)