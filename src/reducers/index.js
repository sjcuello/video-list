const reducer = (state, action) =>{
  switch (action.type) {
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.videos.find(item => item.id === Number(action.payload)) || []
      }
    case 'SET_ALL_VIDEOS':
      return {
        ...state,
        videos: state.videos || []
      }
    case 'SET_ALL_VIDEOS_NEW':
      return {
        ...state,
        videos: action.payload || []
      }
    default:
      return state;
  }
}

export default reducer;