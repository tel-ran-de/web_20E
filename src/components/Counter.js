import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    clickHandler = () => {
        // const newState = {counter: this.state.counter + 1};
        // this.setState(newState);
        this.setState({counter:this.state.counter + 1});
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button
                    onClick={this.clickHandler}
                >Increase counter</button>
            </div>
        );
    }
}

export default Counter;