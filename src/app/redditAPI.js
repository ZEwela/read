

export const sayHello = () => {
    console.log('eeeh');
}

export const API_ROOT = 'https://www.reddit.com';



export const getCategories = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  const categoriesList = json.data.children.map((category) => category.data);
 
  const categoriesListDataSelected = categoriesList.map(category => {
    const {id, title, name, url, display_name} = category;
    const data = {id, title, name, url, display_name};
    return data
  });
  console.log(categoriesListDataSelected)
  return categoriesListDataSelected

};

export const getPostsByCategory = async (category) => {
    const response = await fetch(`${API_ROOT}/r/${category}.json`);
    const json = await response.json();
    const data = json.data.children.map((post) => post.data);
  
    console.log(data)
    return data
  
  }

export const getCommentsForPost = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    const data = json[1].data.children.map((comment) => comment.data);

    console.log(data);
    return data
}

