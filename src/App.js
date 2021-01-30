import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App () {
	const [ todolist, setTodo ] = useState([
		{
            id: 1,
			title: 'test',
			completed: false
		},
		{
            id: 2,
			title: 'test2',
			completed: false
		}
    ]);
    
    const addTodo = (todo) => {
        setTodo([...todolist, todo])
    }

    const removeTodo = (id) => {
        const todoList = todolist.filter((todo) => todo.id !== id)
        setTodo(todoList);
    }

	return (
		<div>
			<Header />
			<Form addTodo={addTodo} />
			<TodoList todolist={todolist} removeTodo={removeTodo} />
		</div>
	);
}

export default App;
