interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome.toString())
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    },
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('skywalker')

// Usando Classes...
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra = new Date
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo = (base, expoente) => base ** expoente

console.log(potencia(4, 2))