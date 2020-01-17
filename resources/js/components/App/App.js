import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "../../redux";
import Todos from "../Todos";

export default class App extends Component {

    render() {
        return (
            <Todos/>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider> ,
        document.getElementById('root'));
}
