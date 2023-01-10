import React from 'react';
import s from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let messagesElement = props.state.messages.map(m => <MessageItem message={m.message}/>);
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar}/>);

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messagesArea}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;