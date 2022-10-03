import Card from "../../components/Card";
import { getPosts } from "./CardsSlice";
import { selectCards, isLoading } from "./CardsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { selectSearchTerm } from "../search/SearchBarSlice";




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

    const searchTerm = useSelector(selectSearchTerm);
    let filteredCards;
    if (searchTerm.length > 1 ) {
        filteredCards = cards.filter(card => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    let cardsToDisplay;
    if (filteredCards) {
        cardsToDisplay = filteredCards;
    } else {
        cardsToDisplay = cards
    }

    return (
        <>
            <div class="container">
                <div class="row">
                    {cardsToDisplay.map(card => 
                        <Card key={card.id} card={card}/>
                    )}
                </div>
            </div>
        </>
    )
}


