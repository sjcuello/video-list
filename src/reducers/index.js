const reducer = (state, action) =>{
  switch (action.type) {
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;