import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const list = this.props.todoList.map(todo =>
            <Todo key={todo.text.toString()} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}></Todo>
        );
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Priority</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}

export default TodoList;
