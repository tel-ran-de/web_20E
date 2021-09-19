import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.people = ['Ivan', 'Marya', 'John'];
    }

    renderHello() {
        return this.people.map((person) => (<h2 key={person}>Hello, {person}</h2>) )
    }

    render() {
        return (
            <>
                <h1>Hello World!</h1>
                {this.renderHello()}
            </>

        );
    }

}

export default Header;