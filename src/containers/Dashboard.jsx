import React, {Component} from 'react';

import Task from '../components/Task'

class Dashboard extends Component {

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

    componentDidMount() {
        let self = this;
        let items = this.state.items;
        items.push({
            id: 4,
            name: 'Super new item',
            description: 'Wow i really just added this item'
        });

        setTimeout(function() {
            self.setState({
                items: items
            });
        }, 3000);
    }

    render() {
        return(
            <div className="dashboard">
                <h1>ToDo App</h1>

                {this.state.items.map(item => 
                    <Task key={item.id} item={item}></Task>    
                )}
            </div>
        );
    }
}

export default Dashboard;