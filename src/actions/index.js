export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});


export const setAllVideosNew = payload => ({
  type: 'SET_ALL_VIDEOS_NEW',
  payload,
});



export const setAllVideos = () => async (dispatch) => {

  const data = await fetch("https://api.jsonbin.io/b/5ef409df2406353b2e0c4068")
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
      return arr;
    },
    (error) => {
      console.log('error: ', error);
    }
  )
  console.log('data: ', data);

  dispatch({
    type: 'SET_ALL_VIDEOS',
    payload: data,
  });
};
