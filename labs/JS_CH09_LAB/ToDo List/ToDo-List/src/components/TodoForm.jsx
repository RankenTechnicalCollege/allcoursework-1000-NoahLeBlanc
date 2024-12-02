import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('');/*This is our Hook*/

    const handleChange = e =>{
      setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      })
      setInput('');
    };

  return (
    <div>
      <form className='todo-form' action="" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Add a todo'
          value={input}
          name='text'
          className='todo-input'
          onChange={handleChange}
        />
        <button className='todo-button'>
            Add Todo
        </button>

      </form>
    </div>
  )
}

export default TodoForm