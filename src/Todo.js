import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>{this.props.text.toString()} {this.props.priority.toString()} {this.props.dueDate.toString()}</h2>
            </div>            
        );
    }
}

export default Todo;
