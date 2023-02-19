import React from 'react'
import style from './Dialogs.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './DialogItem/DialogItem'
import { MessageForm } from './Message/MessageForm'

const Dialogs = ({dialogs, messages, addMessage}) => {
  const dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} avatar={d.avatar}/>)
  const messagesElement = messages.map(m => <MessageItem key={m.id} message={m.message}/>)

  return (
    <div className={style.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div className={style.messagesArea}>
        {messagesElement}
        <MessageForm addMessage={addMessage}/>
      </div>
    </div>
  )
}

export default Dialogs
