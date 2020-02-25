import React, { Component } from 'react';
import NewList from './NewList';
import SearchTask from './searchTask';
import Calendar from './Calendar'

export default class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            todoList: [],
            done: false,
            deadLine: '1398/05/15',
            showWhat: "all"
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            title: e.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            todoList: [{ title: this.state.title, done: this.state.done, id: Date.parse(new Date()), deadLine: this.state.deadLine }, ...this.state.todoList],
            title: '',
            id: ''
        })

    }

    handleRecieveDate = (childDate) => {
        this.setState({
            deadLine: childDate
        })
    }


    handleDone = (index) => {
        console.log(this.state.todoList[index].id)
        this.setState({
            todoList: this.state.todoList.map((item, itemIndex) => {
                if (index === itemIndex) {
                    item.done = !item.done
                }
                return item
            })
        })
    }


    render() {
        let newTodo = [];
        if (this.state.showWhat === "all") newTodo = this.state.todoList
        else if (this.state.showWhat === "done") {
            newTodo = this.state.todoList.filter((item) => item.done)
        } else {
            newTodo = this.state.todoList.filter((item) => !item.done)
        }
        return (
            <div className="container">
                <pre className="px-3"  style={{minHeight:'1000px'}}>
                    <div className="row">
                        <div className="col-4 text-center">
                            <h3>Enter your task below</h3>
                            <form onSubmit={this.handleSubmit}>
                                <input className="form-control form-control-sm" value={this.state.title} onChange={this.handleChange} placeholder="Enter your new task here" />
                                <Calendar onRecieveDate={this.handleRecieveDate} />
                                <button className="btn btn-primary btn-sm w-100" type="submit">Insert Task</button>
                            </form>
                        </div>
                        <div className="col-4 text-center">
                            <h3>Tasks</h3>
                            <div className="row">
                                <div className="col-3">
                                    <div>
                                        <button className="btn btn-info btn-sm mx-2 w-100" onClick={() => this.setState({ showWhat: "all" })}>All</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-success btn-sm mx-2 w-100" onClick={() => this.setState({ showWhat: "done" })}>Done</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-dark btn-sm mx-2 w-100" onClick={() => this.setState({ showWhat: "unDone" })}>unDone</button>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <table class="table table-sm">
                                        <caption>Click on task in table!</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Title</th>
                                                <th scope="col">DeadLine</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                newTodo.map((item, index) => <NewList item={item} onDone={() => this.handleDone(index)} key={index} />)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <h3>Search</h3>
                            <div>
                                <SearchTask tasks={this.state.todoList} />
                            </div>
                        </div>
                    </div>
                </pre>
            </div>
            // </div>
        )
    }
}
