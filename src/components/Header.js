
export default function Header({text}){
    return (
        <header className="container">
            <div className="row text-center">
                <h1 className="col-sm-12">{text}</h1>
            </div>
        </header>
    )
}
