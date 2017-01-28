import React, {Component} from 'react';


/**
 * Hellow World!
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
    render() {
        return (
            <div className="app">
                Hellow {this.props.message}
            </div>
        );
    }
}

export default App;