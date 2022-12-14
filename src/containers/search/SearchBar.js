import { clearSearch, setSearch } from "./SearchBarSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "./SearchBarSlice";


export default function SearchBar() {

    const dispatch = useDispatch();

    const onClickClearSearch = () => {
        dispatch(clearSearch())
    }

    const onChangeSetSearch = (event) => {
        const userInput = event.target.value;
        dispatch(setSearch(userInput))
    }

    const search = useSelector(selectSearchTerm);


    return (
        <div class="input-group searchbar">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="searchSpan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </span>
              </div>
              <input type="text" class="form-control" aria-label="Search" placeholder="Search..." value={search} onChange={onChangeSetSearch}></input>
              <div class="input-group-append">
              <button class="btn btn-outline-secondary" id="closeBTN" type="button" onClick={onClickClearSearch}><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
        </div>
    )
}


 
