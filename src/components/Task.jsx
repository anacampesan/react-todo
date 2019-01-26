import React, {Component} from 'react';

class Task extends Component {

    props: {
        item: {
            id: 'number',
            name: 'string',
            description: 'string'
        }
    }

    render() {
        return (
            <li data-id={this.props.item.id}>{this.props.item.name}</li>
        );
    };
}

export default Task;