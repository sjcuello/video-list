 const reducer = (state, action) =>{
   switch (action.type) {
     case 'GET_VIDEO_SOURCE':
        console.log('playing en reducer: ', state.videos.find(item => item.id === Number(action.payload) ));
        return {
         ...state,
         playing: state.videos.find(item => item.id === Number(action.payload) ) || []
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
 export default reducer;
