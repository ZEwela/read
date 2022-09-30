import Categories from '../containers/categories/Categories';
import Cards from '../containers/cards/Cards';
import { Routes, Route } from 'react-router-dom';

export default function MainBody () {
    return (
        <div class="container main-body">
            <div class="row d-flex">
                <div class="col-9 cards">
                    <Cards/>
                </div>
                <div class="col-3">
                    <Categories/>
                </div>  
            </div>
        </div>
    )
}