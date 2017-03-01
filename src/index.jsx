import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './scripts/App'


const app = document.createElement("div");
document.body.appendChild(app);
function render() {
    ReactDOM.render(
        <App message={"world"}/>,
        app
    )
}

/** HMR support */
if (module.hot) {
    module.hot.accept();
    render()
} else {
    render()
}