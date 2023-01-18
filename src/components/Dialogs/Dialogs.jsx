import React from 'react'
import style from './Dialogs.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar}/>)
  const messagesElement = props.messages.map(m => <MessageItem message={m.message}/>)

  const onSendMessage = () => {
    debugger
    props.sendMessage()
  }

  const onMessageTextChange = (e) => {
    const text = e.target.value
    props.messageTextChange(text)
  }

  return (
    <div className={style.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div className={style.messagesArea}>
        {messagesElement}
        <div className={style.sentMessage}>
                    <textarea onChange={onMessageTextChange}
                              value={props.newPost}/>
          <button onClick={onSendMessage}>Push me to sent message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
