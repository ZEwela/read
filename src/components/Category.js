import { Link } from "react-router-dom";

export default function Category ({text}) {
    return(
        <>
            <Link to={`/${text}`} class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>{text}</span>
            </Link>
        </>
    )
}