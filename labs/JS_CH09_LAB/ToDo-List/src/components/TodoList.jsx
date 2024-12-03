import React, { useState } from 'react'
import TodoForm from './TodoForm'; //gets the form (what handles the input)
import ToDo from './ToDo'; //Gets the actual list for the ToDo List
const TodoList = () => {
  const [todos, setTodos] = useState([]);


  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newTodos = [todo, ... todos]

    setTodos(newTodos);
    console.log(todo, ... todos)
  };
  const removeTodo = id => {
    const removeArr = [... todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /*This is a regEx expression*/ /^\s*$/.test(newValue.text)){
      return; 
    }
    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)));
  }

  const completeTodos = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  return ( //gives us our HTML page
    <div>
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <ToDo todos={todos} 
          completeTodos = {completeTodos} 
          removeTodo={removeTodo}
          updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList