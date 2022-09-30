export default function Category ({text}) {
    return(
        <>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>{text}</span>
            </a>
        </>
    )
}