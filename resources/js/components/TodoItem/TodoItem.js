import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
      const todo = this.props.todo;

      return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-10">
                        {todo.title}
                    </div>
                    <div className="col-2">
                        <input
                            onClick={this.props.handleCheckboxClick}
                            type="checkbox"
                            value={todo.completed}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TodoItem;
