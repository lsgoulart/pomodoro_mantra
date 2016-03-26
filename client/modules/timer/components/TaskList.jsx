import React, {Component} from 'react';

class TaskList extends Component {
    render() {
        const {tasks} = this.props;

        return (
            <div className="task-list">
                <h1>My Tasks</h1>
                <div className="add-task">
                    <input type="text" placeholder="New task" ref="newtask"/>
                    <button onClick={this._addTask.bind(this)}>Ok</button>
                </div>

                {tasks.map((task) => {
                    return <div className="task" key={task._id}>{task.task}</div>
                })}
            </div>
        );
    }

    _addTask() {
        const {timerId, create} = this.props;
        const {newtask} = this.refs;

        if(newtask.value !== '') {
            create(timerId, newtask.value);
            newtask.value = '';
        }
    }
}

export default TaskList;
