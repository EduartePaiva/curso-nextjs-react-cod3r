import meucss from './integracao2.module.css'

export default function integracao2() {
    return (
        <div id={meucss.integracao2}>
            <div className={meucss.vermelha}>Texto #01</div>
            <div className={meucss.azul}>Texto #02</div>
            <div className={meucss.branca}>Texto #03</div>
        </div>
    )
}