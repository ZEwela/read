import Header from '../../components/Header';
import Category from '../../components/Category';

export default function Categories() {
    return (
        <>
          <div class="container d-lg-flex collapse bg-white sidebar">
  
              <div class=" list-group list-group-flush sidebar-body">
                <h3>Subeddits</h3>
                {/* <Header text="Subeddits"/> */}
                <Category text="Main"/>
              </div>
          </div>
      </>
    )
}