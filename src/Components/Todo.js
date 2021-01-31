import React from 'react'

export default function Todo({todo, removeTodo, completeTodo}) {
    return (
        <div className='todo'>
            <li className={`item ${todo.completed ? 'completed' : ''}`}>
                { todo.title }
                <button className='trash-btn' onClick={() => removeTodo(todo.id)}>
                    <i className='fas fa-trash' />
                </button>
                <button className='check-btn' onClick={() => completeTodo(todo.id)}>
                    <i className='fas fa-check' />
                </button>
            </li>
        </div>
    )
}
