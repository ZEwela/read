import Categories from '../containers/categories/Categories';
import Cards from '../containers/cards/Cards';

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