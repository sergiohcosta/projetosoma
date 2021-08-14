var aux = "Meu teste";
console.log(aux);
aux = 10.5;
console.log(aux);
var nome = "Razer";
var sobrenome = "Montaño";
if (nome === sobrenome) {
    console.log("iguais");
}
else {
    console.log("diferentes");
}
var planetas = ["Terra", "Vênus", "Marte"];
console.log(planetas[2]); // obtém um elemento
planetas[1] = "Júpiter"; // seta um elemento
console.log(planetas); // mostra o array inteiro
var Curso;
(function (Curso) {
    Curso[Curso["TADS"] = 5] = "TADS";
    Curso[Curso["TNI"] = 6] = "TNI";
    Curso[Curso["TCI"] = 7] = "TCI";
})(Curso || (Curso = {}));
console.log(Curso);
console.log(Curso.TNI); // retorna 6
console.log(Curso[7]); // retorna TNI
var oi = function () { return console.log("Oieee!!!"); };
var tchau = function () {
    console.log("bye bye");
    console.log("volte logo");
};
oi();
tchau();
