import React, {ChangeEvent, useEffect, useState} from 'react'

type PropsType = {
  statusFromProps: string
  updateStatus: (newStatus: string) => void
  isOwner: boolean
}

const StatusProfile: React.FC<PropsType> = ({statusFromProps, updateStatus, isOwner}) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(statusFromProps)
  const activateMode = () => {
    if (isOwner)
      setEditMode(true)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value)
  }

  const deactivateMode = () => {
    setEditMode(false)
    updateStatus(status)
  }

  useEffect(() => {
    setStatus(statusFromProps)
  }, [statusFromProps])

  return (
    <div>
      {!editMode &&
        <div>
            <span onDoubleClick={activateMode}>
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