import React, {Component} from 'react';


/**
 * Hello World!
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
    render() {
        return (
            <div className="app">
                Hello {this.props.message}
            </div>
        );
    }
}

export default App;