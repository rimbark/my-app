import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText, updateMessageTextarea, sentMessage} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let reRenderPage = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateMessageTextarea={updateMessageTextarea}
                 sentMessage={sentMessage}/>
        </React.StrictMode>
    );
}
