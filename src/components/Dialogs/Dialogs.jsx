import React from 'react'
import s from './Dialogs.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './DialogItem/DialogItem'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/messagesReducer'

const Dialogs = (props) => {
  const dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar}/>)
  const messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>)

  const sentMessage = () => {
    // eslint-disable-next-line no-debugger
    debugger
    props.dispatch(addMessageActionCreator())
  }

  const onMessageTextChange = (e) => {
    const text = e.target.value
    props.dispatch(updateMessageActionCreator(text))
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
                              value={props.messagesPage.newOutputMessage}/>
          <button onClick={sentMessage}>Push me to sent message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
