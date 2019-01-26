import React, {Component} from 'react';
import Task from './Task';

class TaskList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    name: 'My first task',
                    description: 'Testing this app'
                },
                {
                    id: 1,
                    name: 'My second task',
                    description: 'Testing this app again'
                },
                {
                    id: 2,
                    name: 'My third task',
                    description: 'Testing this app for the last time'
                }
            ]
        }
    }

    render() {
        return(
            <ul>
                {this.state.items.map(item => <Task name={item.name}></Task>)}
            </ul>
        );
    }
}

export default TaskList;