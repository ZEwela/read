import Header from '../../components/Header';
import Category from '../../components/Category';

export default function Categories() {
    return (
        <>
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
            <div class="position-sticky">
              <div class="list-group list-group-flush mx-3 mt-4">
                <Header text="Subeddits"/>
                <Category text="Main"/>
              </div>
            </div>
          </nav>
      </>
    )
}