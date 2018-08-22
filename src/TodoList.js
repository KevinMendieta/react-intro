import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const list = this.props.todoList.map(todo => 
            <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}></Todo>
        );
        return (
            <ul>{list}</ul>
        );
    }
}

export default TodoList;
