import React, { Component } from 'react';

class SearchTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: '',
            searchTasks: '',
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
            filteredTask = this.props.tasks.filter((task) => 
            task.title.includes(this.state.searchTasks)).slice(0,10)
            .map((task, index) => <tr key={task.id} style={{backgroundColor: (task.done) ? 'orange' : ''}}>
                <td>{task.title}</td>
                <td>{task.deadLine}</td>
                </tr>
                )
        }
        return (
            <div>
                <input className="form-control form-control-sm" type="text" 
                value={this.state.searchTasks} onChange={this.handleChange} />


                <table className="table table-sm">
                    <caption>Search result(Shows first 10 item)</caption>
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