"use strict";
// string
let nome = "João";
console.log(nome);
//nome = 28
//numbers
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = 'idade é 27'
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
//hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Av principal", 99, ""];
console.log(endereco);
endereco = ['Rua Importante', 1200, 'Bloco C'];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
// any
let carro = 'BMW';
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
