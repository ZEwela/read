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
        <div class=" list-group list-group-flush sidebar-body">
          <h3>Categories</h3>
          <div class="categoriesList">
            {categories.map(category => 
              <Category key={category.id} text={category.display_name}/>
            )}
          </div>
        </div>
    </>
  )
}
