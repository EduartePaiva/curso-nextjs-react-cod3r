export default function lista1() {
    const numero_de_span = 50
    const spans = multiplicarSpan(numero_de_span)


    return (
        <div>
            {spans}
            <p>teste</p>
        </div>
    )
}


function multiplicarSpan(numSpan: number) {
    const arraySpan: JSX.Element[] = []

    for (let i = 1; i <= numSpan; i++) {
        arraySpan.push(<span key={i}>{i}, </span>)
    }
    return arraySpan
}
