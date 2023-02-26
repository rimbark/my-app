import React, { useEffect, useState } from 'react'

export function StatusProfile (props) {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  const activateMode = () => {
    setEditMode(true)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const deactivateMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {!editMode &&
        <div>
            <span onDoubleClick={props.isOwner && activateMode}>
              {status || '-----'}
            </span>
        </div>}
      {editMode &&
        <div>
          <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}/>
        </div>}

    </div>
  )
}

export default StatusProfile