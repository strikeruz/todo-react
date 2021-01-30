import React, { useState } from 'react';

export default function Form ({ addTodo }) {
    const [title, setTitle] = useState('')
	const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            title: title,
            completed: false
        })
        setTitle('')
    };

    const changeInput = (e) => {
        setTitle(e.target.value)
    }

	return (
		<div className='todo-area'>
			<form action='#' onSubmit={handleSubmit}>
				<input type='text' name='text' id='todoinput' onChange={changeInput} value={title} />
				<button id='todobutton' type='submit'>
					<i className='fas fa-plus-square' />
				</button>
				<div id='select'>
					<select name='todos' id='todoselect'>
						<option value='all'>All</option>
						<option value='completed'>Completed</option>
						<option value='uncompleted'>Uncompleted</option>
					</select>
				</div>
			</form>
		</div>
	);
}
