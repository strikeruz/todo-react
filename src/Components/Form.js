import React, { useState } from 'react';
import { useForm } from "react-hook-form";


export default function Form (props) {
	const { addTodo, filterTodo } = props
	const { register, errors, handleSubmit } = useForm();
	const [title, setTitle] = useState('')
	/**
	 * Method for submit action
	 * @param {event} 
	 */
	const submit = (e) => {
		addTodo({
			id: Date.now(),
			title: title,
			completed: false
		})
		setTitle('')
    };

	/**
	 * Method for change input
	 * @param {event}
	 */
    const changeInput = (e) => {
        setTitle(e.target.value)
    }

	/**
	 * Method for change filter by value
	 * @param {event}
	 */
	const changeFilter = (e) => {
		filterTodo(e.target.value)
	}

	/**
	 * @return {Component} Form component
	*/
	return (
		<div className='todo-area'>
			<form action='#' onSubmit={handleSubmit(submit)}>
				<input 
				type='text' 
				name='text' 
				id='todoinput'
				className={errors.text ? "error" : null} 
				onChange={changeInput}
				ref={register({ required: true })}
				value={title} 
				/>
				<button id='todobutton' type='submit'>
					<i className='fas fa-plus-square' />
				</button>
				<div id='select'>
					<select name='todos' id='todoselect' onChange={changeFilter}>
						<option value='all'>All</option>
						<option value='completed'>Completed</option>
						<option value='uncompleted'>Uncompleted</option>
					</select>
				</div>
			</form>
			{errors.text && "Your input is required"}
		</div>
	);
}
