import Categories from "../containers/categories/Categories";
import { useState, useEffect } from "react";

export default function CategoriesMenu() {

 

    const body = document.querySelector('body');
    const icon = document.querySelector('i');

    const [isCollapse, setIsCollapse] = useState(false);

    const onClickShowMenu = () => {
      setIsCollapse(current => !current);
      if (isCollapse === false) {
        body.classList.add('noscroll');
        icon.classList.add('fa-xmark');
        icon.classList.remove('fa-bars');
      } else {
        body.classList.remove('noscroll');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    }


    return (
        <div class="d-lg-none  categories-menu">
            <button class=" btn btn-light " type="button" data-toggle="collapse" data-target="#collapseExampleMenu" aria-expanded="true" aria-controls="collapseExampleMenu" onClick={onClickShowMenu}>
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class={isCollapse ? 'collapse show' : 'collapse'} id="collapseExampleMenu">
                <div class="menu"><Categories /></div>

            </div>
        </div>
    )
}