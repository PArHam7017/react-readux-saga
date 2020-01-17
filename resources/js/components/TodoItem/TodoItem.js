import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-10">
                        {this.props.title}
                    </div>
                    <div className="col-2">
                        <input type="checkbox" defaultChecked={this.props.completed} name="completed" id="completed"/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TodoItem;
