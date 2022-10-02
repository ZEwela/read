import Card from "../../components/Card";
import { getPosts } from "./CardsSlice";
import { selectCards, isLoading } from "./CardsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



export default function Cards () {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    let categoryName = pathname.slice(1);
  
    if (!categoryName) {
        categoryName = 'Home'
    }

    useEffect(() => {
        dispatch(getPosts(categoryName))
    }, [categoryName])

    const cards = useSelector(selectCards);

    return (
        console.log('from CArds', cards),
        <>
            <div class="container">
                <div class="row">
                    {cards.map(card => 
                        <Card key={card.id} card={card}/>
                    )}
                </div>
            </div>
        </>
    )
}


