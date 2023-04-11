import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div className="">
            <h1>Usando Título</h1>
            <hr />
            <Titulo
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo
                principal="Página de Cadastro pequena"
                secundario="Incluir, alterar e excluir coisas pequenas!"
                pequeno
            />

        </div>
    )
}