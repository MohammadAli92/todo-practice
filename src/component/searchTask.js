import React, { Component } from 'react';

class SearchTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: '',
            searchTasks: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        this.setState({
            searchTasks: e.target.value
        })
        console.log(this.state.searchTasks)
    }
    render() {
        let filteredTask;
        if (this.state.searchTasks) {
            filteredTask = this.props.tasks.filter((task) => task.title.includes(this.state.searchTasks)).map(task => <tr key={task.id}><td>{task.title}</td><td>{task.title}</td></tr>)
        }
        return (
            <div>
                <input className="form-control form-control-sm" type="text" value={this.state.searchTasks} onChange={this.handleChange} />


                <table class="table table-sm">
                    <caption>Search result</caption>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">DeadLine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTask}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchTask