import React, {Component} from 'react';

class Goodbye extends Component {

    render() {
        return (
            <h2>Goodbye, {this.props.name}</h2>
        )
    }

}

export default Goodbye;