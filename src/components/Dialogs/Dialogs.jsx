import React from 'react'
import style from './Dialogs.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} avatar={d.avatar}/>)
  const messagesElement = props.messages.map(m => <MessageItem key={m.id} message={m.message}/>)
  const newText = props.newMessage
  const onSendMessage = () => {
    props.addMessage()
  }

  const onMessageTextChange = (e) => {
    const text = e.target.value
    props.updateMessage(text)
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
                              value={newText}/>
          <button onClick={onSendMessage}>Push me to sent message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
