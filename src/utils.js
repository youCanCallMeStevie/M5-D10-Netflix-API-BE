export const fetchMedia = async (queryKey, queryValue) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/media?${queryKey}=${queryValue}` );
      const media = await res.json();
      if (res.ok) {
        console.log("all good");
        return media;
      } else {
        console.log("there is an error with fetching media");
      }
    } catch (err) {
      console.log("there is an error");
    }
  };
  
  export const fetchReviews = async imdbID => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/media/${imdbID}/reviews` );
      if (res.ok) {
        const comments = await res.json();
        console.log(comments);
        return comments;
      } else {
        console.log("there is an error with fetching reviews");
      }
    } catch (err) {
      console.log("there is an error");
    }
  };
  