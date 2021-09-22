import React, {Component} from 'react';
import ShowName from "./ShowName";
import Clock from "./Clock";
import RedClock from "./RedClock";

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            names: ["Ivan", "Kris", "John", "Mary"],
            index: 0
        }
    }

    changeName = () => {
        const newState = {
            names: this.state.names,
            index: this.state.index + 1 === this.state.names.length ? 0 : this.state.index + 1
        }
        this.setState(newState);
    }

    render() {
        return (
            <div style={{width: '980px', margin: '0 auto'}}>
                <ShowName name={this.state.names[this.state.index]} />
                <button onClick={this.changeName}>Change Name</button>
                <div style={{paddingTop: '50px'}}>
                    <Clock />
                </div>
                <div style={{paddingTop: '50px'}}>
                    <RedClock />
                </div>
            </div>
        );
    }
}

export default App;