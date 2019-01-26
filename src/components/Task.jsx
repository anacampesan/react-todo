import React, {Component} from 'react';

class Task extends Component {

    props: {
        id: 'number',
        name: 'string',
        description: 'string'
    }

    render() {
        return (
            <li data-id={this.props.id}>{this.props.name}</li>
        );
    };
}

export default Task;