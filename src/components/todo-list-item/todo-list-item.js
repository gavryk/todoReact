import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {


    state = {
      label: ''
    };

    changeLabel = (e) => {
        this.setState({
            label: e.target.value
        });
    };


    editSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeTask(this.state.label);
    };

    render() {
        const {
            label, onDeleted,
            onToggleImportant, onToggleDone,
            done, important,
            onEdit, isEdit } = this.props;


        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important'
        }
        const isEditBlock = <form onSubmit={ this.editSubmit }>
                                <input type="text"
                                       onChange={ this.changeLabel }
                                        ref='inputChange'
                                />
                            </form>;
        const isLabelBlock = <span className='todo-list-item-label'
                                   onClick={ onToggleDone }>
                                   { label }
                            </span>;

        return (
            <div className={ classNames }>
                { isEdit ? isEditBlock : isLabelBlock }
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
