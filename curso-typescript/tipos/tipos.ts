// string
let nome: string = "João"
console.log(nome)

//nome = 28

//numbers
let idade: number = 27
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)


//tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = 'idade é 27'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
//hobbies = 100
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["Av principal", 99, ""]
console.log(endereco)

endereco = ['Rua Importante', 1200, 'Bloco C']
console.log(endereco)

// enums

enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul = 10,   // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)

// any
let carro: any = 'BMW'
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)
