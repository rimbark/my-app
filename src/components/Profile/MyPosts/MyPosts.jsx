import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} likes={p.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>
                My post
            </h3>
            <div>
                <div className="">
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div className="">
                    <button onClick={ addPost }>
                        Put me to send
                    </button>
                </div>
            </div>


            <div className=""></div>
            <div className=""></div>
            <div className={s.NewPost}>
                <h5>
                    New posts
                </h5>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;