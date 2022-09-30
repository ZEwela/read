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

    const postsList = json.data.children.map((post) => post.data);
  
    const postsListDataSelected = postsList.map(post => {
      const {author, created_utc, name, id, permalink, subreddit, subreddit_id, title, score, link_flair_text, url, media} = post;
      const data = {author, created_utc, name, id, permalink, subreddit, subreddit_id, title, score, link_flair_text, url, media};
      return data
    });
    console.log(postsListDataSelected)
    return postsListDataSelected
  
  }

export const getCommentsForPost = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();

    const commentsList = json[1].data.children.map((comment) => comment.data);

    const commentsListDataSelected = commentsList.map(comment => {
      const {author, body, id, parent_id} = comment;
      const data = {author, body, id, parent_id};
      return data
    });
    console.log(commentsListDataSelected)
    return commentsListDataSelected
}

