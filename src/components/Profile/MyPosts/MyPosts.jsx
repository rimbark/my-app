import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.state.map(p => <Post message={p.post} likes={p.likesCount}/>)

    return (
        <div>
            <h3>
                My post
            </h3>
            <div>
                <div className="">
                    <textarea name="New post zone" id="" cols="50" rows="2">
                    </textarea>
                </div>
                <div className="">
                    <button>
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