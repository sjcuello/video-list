import { useState, useEffect} from 'react';


const useInitialState = (API) => {
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          //Assigning an identifier to each of the objects
          let arr = result.categories[0].videos;
          let i = 0;
          arr.map(item => {
            item.id = i;
            i++;
            return item;
          });
          setVideos(arr);
        },
        (error) => {
          console.log('error: ', error);
        }
      )
  }, []);

  return videos;

};

export default useInitialState;
