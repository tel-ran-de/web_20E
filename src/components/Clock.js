import React, {Component} from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {timenow: 0}
    }

    renderClock = () => {
        return !this.state.timenow ? (<span>No time</span>) : (<span>{this.state.timenow} sec</span>)
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState( {timenow: this.state.timenow + 1} );
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.renderClock()}
            </div>
        );
    }
}

export default Clock;