import React, {Component} from 'react';

class ShowName extends Component {

    /*

    1. Монтирование
    constructor()
    UNSAFE_componentWillMount()
    render()
    componentDidMount()
    2. Обновление
    UNSAFE_componentWillUpdate()
    shouldComponentUpdate()
    UNSAFE_componentWillReceiveProps()
    render()
    componentDidUpdate()
    3. Уничтожение
    componentWillUnmount()

     */


    constructor(props) {
        super(props);
        console.time('Constructor');
        console.log("Constructor is run");
        console.timeEnd('Constructor');
    }

    componentDidMount() {
        console.time('DidMount');
        console.log("DidMount is run");
        console.timeEnd('DidMount');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.time( "ShouldComponentUpdate" );
        console.log( "ShouldComponentUpdate is run" );
        console.log( nextProps )
        console.timeEnd( "ShouldComponentUpdate" );
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.time( "DidUpdate" );
        console.log( "DidUpdate is run" );
        console.log( prevProps )
        console.timeEnd( "DidUpdate" );
    }


    render() {
        console.time('Render');
        console.log("Render is run");
        console.timeEnd('Render');
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default ShowName;