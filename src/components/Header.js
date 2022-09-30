
export default function Header({text}){
    return (
        <header className="container header">
            <div className="row text-left">
                <h1 className="col-sm-4">{text}</h1>
            </div>
        </header>
    )
}

