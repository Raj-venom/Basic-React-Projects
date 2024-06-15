import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Text() {
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState("Double click to edit")
  return (
    <Draggable>
      {editMode ?
        (<input
          onDoubleClick={() => setEditMode(prev => !prev)}
          className=' w-1/2 bg-slate-300'
          placeholder='Enter Text'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        )

        : (<h1 onDoubleClick={() => setEditMode(prev => !prev)} className=' font-semibold text-2xl' >{text}</h1>)}
    </Draggable>
  )
}

export default Text
