export default function jsx4() {
    const subtitulo = 'Estou no TypeScript'
    return (
        <div>
            <h1>Integração TS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(9.6, 1, 10)}</h5>
        </div>
    )
}

function entre(valor: number, min: number, max: number): string {
    if (valor >= min && valor <= max) {
        return 'Sim'
    } else {
        return "Não"
    }
}