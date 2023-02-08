import React from 'react'
import { addMessage } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const matStateToProps = (state) => {
  return {
    messages: state.messagesReducer.messages,
    dialogs: state.messagesReducer.dialogs,
    newMessage: state.messagesReducer.newOutputMessage
  }
}

export default compose(connect(matStateToProps, { addMessage }), withAuthRedirect)(Dialogs)
