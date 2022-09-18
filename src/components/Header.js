
export default function Header({text}){
    return (
        <header className="container">
            <div className="row">
                <h1 className="col-sm-4">{text}</h1>
            </div>
        </header>
    )
}
