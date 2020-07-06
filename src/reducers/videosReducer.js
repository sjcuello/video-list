const INITIAL_STATE = {
  playing: {},
  queue:{},
  recommended:[],
  videos: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_VIDEO_SOURCE':
       return {
        ...state,
        playing: action.video
      }
    case 'SET_ALL_VIDEOS':
      return {
        ...state,
        videos: action.payload || []
      }
    case 'GET_ALL_RECOMMENDED':
      return {
        ...state,
        recommended: state.videos.filter(item => item.id !== state.playing.id) || []
      }
    default:
      return state;
  }
}