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
            <div>
                <h2>[{this.props.item.id}] - {this.props.item.name}</h2>

                <p>{this.props.item.description}</p>

                <hr/>
            </div>
        );
    };
}

export default Task;