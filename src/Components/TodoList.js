import React from 'react';
import Todo from './Todo';

export default function TodoList (props) {
	const { todolist, removeTodo, completeTodo } = props;
	return (
		<div className='todo-container'>
			<ul id='todolist'>
				{todolist.map((todo, index) => {
					return <Todo key={index} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />;
				})}
			</ul>
		</div>
	);
}
