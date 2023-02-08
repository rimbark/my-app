import React from 'react'

class StatusProfile extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateMode = () => {
    this.setState({editMode: true})
  }
  deactivateMode = () => {
    this.setState({editMode: false})
    debugger
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })

  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status)
      this.setState({status: this.props.status})
  }

  render () {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateMode}>
              {this.props.status || '-----'}
            </span>
          </div>}
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} onBlur={this.deactivateMode} autoFocus={true} value={this.state.status}/>
          </div>}

      </div>
    )
  }
}

export default StatusProfile