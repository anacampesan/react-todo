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
    }

    addItem = (e) => {
        e.preventDefault();

        let items = this.state.items;
        let currentId = this.state.items.length

        items.push({
            id: currentId++,
            name: e.target[0].value,
            description: e.target[1].value
        });

        this.setState({
            items: items
        });
    }

    render() {
        return(
            <div className="dashboard">
                <h1>THE ULTIMATE TODO APP</h1>

                <hr/>

                {this.state.items.map(item => 
                    <Task key={item.id} item={item}></Task>    
                )}

                <form onSubmit={this.addItem}>
                    <input name="name" placeholder="Task name"/>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                    <button name="">Submit</button>
                </form>
            </div>
        );
    }
}

export default Dashboard;