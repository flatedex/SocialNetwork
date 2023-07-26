const ADD_POST ='ADD-POST';
const UPDATE_POST ='UPDATE-NEW-TEXT-POST';
let initialState = {
  postDataBase: [
    { id: 1, post: "Привет", countLike: "15" },
    { id: 2, post: "Я люблю котиков", countLike: "45" },
  ],
  newPostText: "",
};

const profileReducer =(state=initialState, action)=>{
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText !== "") {
        let newPost = {
          id: 7,
          post: state.newPostText,
          countLike: "0",
        };
        state.postDataBase.unshift(newPost);
        state.newPostText = "";
      }
      return state;
    case UPDATE_POST:
      state.newPostText = action.textChange;
      return state;
    default:
        return state;
  }
}


export const addPostActionCreator = ()=> ({
    type:ADD_POST
  })
  
  export const updateTextPostActionCreator = (text)=>({
      type: UPDATE_POST,
      textChange: text,
    })

    
export default profileReducer;