let aux : any = "Meu teste";
console.log(aux);
aux = 10.5;
console.log(aux);

let nome = "Razer";
let sobrenome = "Montaño";
if (nome === sobrenome) {
console.log("iguais");
}
else {
console.log("diferentes");
}

let planetas : Array<string> = [ "Terra", "Vênus", "Marte" ];
console.log(planetas[2]); // obtém um elemento
planetas[1] = "Júpiter"; // seta um elemento
console.log(planetas); // mostra o array inteiro

enum Curso {
TADS = 5,
TNI,
TCI
}
console.log( Curso );
console.log( Curso.TNI ); // retorna 6
console.log( Curso[7] ); // retorna TNI

let oi = () => console.log("Oieee!!!");
let tchau = () => {
console.log("bye bye");
console.log("volte logo");
}
oi();
tchau();