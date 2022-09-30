import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../components/Category';
import { isLoadingCategories, selectAllCategories, loadAllCategories } from './CategoriesSlice';


export default function Categories() {

  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(isLoadingCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllCategories());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <>
        <div class="container d-lg-flex collapse bg-white sidebar">

            <div class=" list-group list-group-flush sidebar-body">
              <h3>Subeddits</h3>
              <div class="categoriesList">
                {categories.map(category => 
                  <Category text={category.display_name}/>
                )}
              </div>
            </div>
        </div>
    </>
  )
}
