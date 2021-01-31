import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App () {
	/**
	 * Default state for todo
	*/
	const defaultState = [
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
	];
	const [ todolist, setTodo ] = useState(defaultState);

	// Filtered State
	const [ filteredTodo, setFilterToDo ] = useState(todolist);

	// Watching todolist for filter
	useEffect(
		() => {
			setFilterToDo(todolist);
		},
		[ todolist ]
	);

	/**
	 * Method addTodo for add todo
	 * @param {Object} todo 
	 */
	const addTodo = (todo) => {
		setTodo([ ...todolist, todo ]);
	};

	/**
	 * Method for complete todo by id
	 * @param {string} id 
	 */
	const completeTodo = (id) => {
		const index = todolist.findIndex((todo) => todo.id === id);
		todolist[index].completed = !todolist[index].completed;
		setTodo([ ...todolist ]);
	};

	/**
	 * Method removeTodo for remove todo item
	 * @param {string} id 
	 */
	const removeTodo = (id) => {
		const todoList = todolist.filter((todo) => todo.id !== id);
		setTodo(todoList);
	};

	/**
	 * Method filterTodo for filtering todo item
	 * @param {string} val 
	 * Status all/completed/uncompleted
	 */

	const filterTodo = (val) => {
		const all = todolist;
		const completed = todolist.filter((todo) => todo.completed);
		const uncompleted = todolist.filter((todo) => !todo.completed);

		switch (val) {
			case 'all':
				setFilterToDo(all);
				break;
			case 'completed':
				setFilterToDo(completed);
				break;
			case 'uncompleted':
				setFilterToDo(uncompleted);
				break;
			default:
				setFilterToDo(all);
		}
	};

	return (
		<div>
			<Header />
			<Form addTodo={addTodo} filterTodo={filterTodo} />
			<TodoList todolist={filteredTodo} removeTodo={removeTodo} completeTodo={completeTodo} />
		</div>
	);
}

export default App;
