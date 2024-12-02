import React, { useState } from 'react'
import { RiChloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
const ToDo = ({todos, completeTodos}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  return todos.map((todo, index)) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodos(Todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icons' />
        <TiEdit onClick={() => setEdit ({ id: todo.id, value: todo.text})} className='edit-icon' />
      </div>

    </div>
  )
}

export default ToDo