import React from 'react';
import Todo from './Todo';

export default function TodoList ({ todolist, removeTodo }) {
	return (
		<div className='todo-container'>
			<ul id='todolist'>
                {todolist.map((todo, index) => {
                    return  <Todo key={index} todo={todo} removeTodo={removeTodo} />
                })}
			</ul>
		</div>
	);
}
