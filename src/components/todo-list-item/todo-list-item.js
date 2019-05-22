import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {


    state = {
      text: this.props.label
    };

    onLabelChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    onSubmitChange = (e) => {
        e.preventDefault();
        this.props.onEdit(this.state.text);
        console.log(this.state.text)
    };

    render() {
        const {
            label, onDeleted,
            onToggleImportant, onToggleDone,
            done, important,
            onEdit, isEdit
        } = this.props;


        const editInput =
            <form onSubmit={ this.onSubmitChange }>
                <input type="text"
                       className='form-control edit-input'
                       onChange={ this.onLabelChange }
                />
            </form>;
        const taskText = <span className='todo-list-item-label'
                               onClick={ onToggleDone }>
                               { label }
                        </span>;


        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important'
        }
        return (
            <div className={ classNames }>
                { isEdit ? editInput : taskText}

            <div className="buttons-wrapper">
                <button type='button'
                        className='btn btn-outline-danger btn-sm'
                        onClick={ onDeleted }>
                <i className='fa fa-trash-o'/>
            </button>
            <button type='button'
                    className='btn btn-outline-success btn-sm'
                    onClick={ onToggleImportant }>
                <i className='fa fa-exclamation'/>
            </button>
            <button
                type='button'
                className='btn btn-outline-info btn-sm'
                onClick={ onEdit }
            >
                <i className='fa fa-edit'/>
            </button>
            </div>
        </div>
        )
    }
}
