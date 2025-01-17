import React from 'react'
import './InputPost.css'
import NewPostProfile from '../NewPostProfile/NewPostsProfile';

const InputPost=(props) => {
  let postsElements=props.profilePage.postDataBase.map(post=>
    <NewPostProfile key={post.id} textPost={post.post} countLike={post.countLike}/>
  )

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange =()=>{
    let text = newPostElement.current.value;
    props.updateTextPost(text);
  }

    return (
      <div>
        <div className="InputPost backgroundColor borderRadius">
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            type="text"
            placeholder="Поделитесь котиком"
            value={props.profilePage.newPostText}
            className="textInputLabel textFamily borderRadius"
          />

          <button
            className="buttonCatPaw backgroundColorItem borderRadius"
            onClick={onAddPost}
          >
            <img
              src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
              className="catPaw" alt='Cat'
            />
          </button>
        </div>
        <div>{postsElements}</div>
      </div>
    );

}
export default InputPost;