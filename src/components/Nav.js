import SearchBar from "../containers/search/SearchBar";
import Header from "./Header";
import CategoriesMenu from "./CategoriesMenu";

export default function Nav () {
    return (
        <>
            <div class="row d-flex nav">
                <div class="d-flex justify-content-around">
                    <div class="col-sm-4">
                        <Header text="Read"/>
                    </div>
                    <div class="col-sm-4">
                        <SearchBar/>
                    </div>
                    <div class="col-sm-4">
                        <CategoriesMenu/>
                    </div>
                </div>
            </div>
        </>
    )
}