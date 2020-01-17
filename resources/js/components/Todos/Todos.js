import React, {Component} from 'react';
import TodoItem from "../TodoItem";
import {addTodo, removeTodo, toggleTodo} from "../../redux/actions";
import {connect} from "react-redux";
import store from "../../redux";

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: title => dispatch(addTodo(title)),
        removeTodo: index => dispatch(removeTodo(index)),
        toggleTodo: index => dispatch(toggleTodo(index))
    }
};

class Todos extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: ''
        }
    }

    handleButtonClick(event) {
        this.props.addTodo(this.state.title);
        console.log(store.getState());
    }

    render() {
        return (
            <section id="main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card mt-5">
                                <div className="card-header">لیست کارها</div>
                                <div className="card-body">
                                    {
                                        this.props.todos.map(
                                            (todo , index) =>
                                                <TodoItem key={index} title={todo.title} completed={todo.completed}/>
                                        )
                                    }

                                    <div className="row">
                                        <div className="col-8">
                                            <input
                                                value={this.state.title}
                                                onChange={event => this.setState({title: event.target.value})}
                                                className="form-control"
                                                type="text"
                                                name="title"
                                                id="title"/>
                                        </div>

                                        <div className="col-4 d-flex justify-content-center">
                                            <button
                                                type="button"
                                                onClick={event => this.handleButtonClick(event)}
                                                className="btn btn-success">اضافه کردن
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);
