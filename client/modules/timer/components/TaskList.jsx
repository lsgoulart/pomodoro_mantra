import React, {Component} from 'react';

class TaskList extends Component {
    render() {
        const {tasks} = this.props;

        return (
            <div className="task-list">
                <div className="container">
                    <h1>My Tasks</h1>
                    <div className="add-task">
                        <input type="text" placeholder="New task" ref="newtask"/>
                        <button onClick={this._addTask.bind(this)}>Ok</button>
                    </div>

                    {tasks.map((task) => {
                        return (
                            <div className="task" key={task._id}>
                                <div className="priority" onClick={ this._setPriority.bind(this, task._id, task.priority) } style={ this._getPriorityColor(task.priority, task.completed) }>
                                    <div className="tooltip" style={ this._getPriorityColor(task.priority, task.completed)}>
                                        { this._getPriority(task.priority) } priority
                                        <div className="triangle" style={{ borderColor: this._getPriorityColorTriangle(task.priority) }}></div>
                                    </div>
                                </div>
                                <div className="complete" onClick={this._toggleComplete.bind(this, task._id)}>
                                    <i className="fa fa-check" style={{ color: (task.completed) ? '#81e808' : '#5a5a58' }}></i>
                                </div>
                                <span>{task.task}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

    _setPriority(taskId, priority) {
        const {set_priority} = this.props;
        if(priority < 2) priority++;
        else priority = 0;

        set_priority(taskId, priority);
    }

    _getPriorityColorTriangle(priority) {
        let style = '';

        switch (priority) {
            case 0:
                style = 'transparent transparent transparent #81e808';
                break;
            case 1:
                style = 'transparent transparent transparent #ffa800';
                break
            case 3:
                style = 'transparent transparent transparent #eb3e3e';
                break
            default:
                style = 'transparent transparent transparent #eb3e3e';
                break
        }

        return style;
    }

    _getPriority(priority) {
        switch (priority) {
            case 0:
                return 'Low';
                break;
            case 1:
                return 'Medium';
                break;
            case 2:
                return 'High';
                break;
            default:
                return 'Low';
                break;
        }
    }

    _toggleComplete(taskId) {
        const {set_completed} = this.props;
        set_completed(taskId);
    }

    _getPriorityColor(priority, completed) {
        let style = {}

        if(completed) style = { transform: 'scale(0)' };

        switch (priority) {
            case 0:
                style = { ...style, backgroundColor: '#81e808' }
                break;
            case 1:
                style = { ...style, backgroundColor: '#ffa800' }
                break
            case 3:
                style = { ...style, backgroundColor: '#eb3e3e' }
                break
            default:
                style = { ...style, backgroundColor: '#eb3e3e' }
                break
        }

        return style;
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
