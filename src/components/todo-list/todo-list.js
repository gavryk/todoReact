import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

export default class TodoList extends Component {
    render() {
        const { todos, onDeleted,
                onToggleImportant,
                onToggleDone, onEdit, onChangeTask} = this.props;

        const elements = todos.map((item) => {
            const {id, ...itemProps } = item;

            return (
                <li key={ id } className='list-group-item'>
                    <TodoListItem
                        { ...itemProps }
                        onDeleted={() => onDeleted(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                        onEdit={() => onEdit(id)}
                        onChangeTask={(label) => onChangeTask(label, id)}
                    />
                </li>
            )
        });
        return (
            <ul className='list-group todo-list'>
                { elements }
            </ul>
        )
    }
}