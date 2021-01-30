import React from 'react'

export default function Todo({todo, removeTodo}) {
    return (
        <div className='todo'>
            <li className='item'>
                { todo.title }
                <button className='trash-btn' onClick={() => removeTodo(todo.id)}>
                    <i className='fas fa-trash' />
                </button>
                <button className='check-btn'>
                    <i className='fas fa-check' />
                </button>
            </li>
        </div>
    )
}
