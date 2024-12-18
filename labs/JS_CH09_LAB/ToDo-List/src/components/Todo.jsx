/*Handles Imports*/
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri' //Icon for close button
import { TiEdit } from 'react-icons/ti' //Icons for Edit Button

//This all handles the actual list of the todo list
const ToDo = ({todos, completeTodos, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  };

  if(edit.id){
    return <TodoForm edit={edit} onSubmit = {submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodos(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icons' />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})} className='edit-icon' />
      </div>
    </div>
  ));
}

export default ToDo

