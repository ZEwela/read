import { Link } from "react-router-dom";

export default function Category ({text}) {
    return(
        <>
            <Link to={`/${text}`} class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <span>{text}</span>
            </Link>
        </>
    )
}