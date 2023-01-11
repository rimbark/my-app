import React from 'react';
import s from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar}/>);
    let messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>);
    let newMessageRef = React.createRef();
    let onMessageTextChange = () => {
        let text = newMessageRef.current.value;
        props.updateMessageTextarea(text);
    }

    let sentMessage = () => {
        props.sentMessage();
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messagesArea}>
                {messagesElement}
                <div className={s.sentMessage}>
                    <textarea onChange={onMessageTextChange}
                              ref={newMessageRef}
                    value={props.messagesPage.newOutputMessage}/>
                    <button onClick={sentMessage}>Push me to sent message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;