export default function Titulo(props: { principal: string, secundario: string, pequeno?: boolean }) {

    return props.pequeno ? (
        <>
            <p className="font-mono text-slate-300 bg-slate-700">{props.principal}</p>
            <p className="font-mono text-slate-300 bg-slate-700">{props.secundario}</p>
            <hr />
        </>
    ) : (
        <>
            <h1 >{props.principal}</h1>
            <h2 >{props.secundario}</h2>
            <hr />
        </>
    )

}