import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App () {
	const [ todolist, setTodo ] = useState([
		{
            id: 1,
			title: 'test',
			completed: true
		},
		{
            id: 2,
			title: 'test2',
			completed: false
		}
    ]);
	
	const [filteredTodo, setFilterToDo] = useState(todolist)

	useEffect(() => {
		setFilterToDo(todolist)
	}, [todolist])

    const addTodo = (todo) => {
        setTodo([...todolist, todo])
    }

    const removeTodo = (id) => {
        const todoList = todolist.filter((todo) => todo.id !== id)
        setTodo(todoList);
    }

	const filterTodo = (val) => {
		const all = todolist
		const completed = todolist.filter((todo) => todo.completed)
		const uncompleted = todolist.filter((todo) => !todo.completed)

		switch (val) {
			case 'all':
				setFilterToDo(all)
				break;
			case 'completed':
				setFilterToDo(completed)
				break;
			case 'uncompleted':
				setFilterToDo(uncompleted)
				break;
			default: 
				setFilterToDo(all)
		}
	}

	const completeTodo = (id) => {
		const index = todolist.findIndex(todo => todo.id === id)
		todolist[index].completed = !todolist[index].completed
		setTodo([...todolist]);
	}

	return (
		<div>
			<Header />
			<Form addTodo={addTodo} filterTodo={filterTodo} />
			<TodoList todolist={filteredTodo} removeTodo={removeTodo} completeTodo={completeTodo} />
		</div>
	);
}

export default App;
