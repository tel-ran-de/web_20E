import React, {useState} from 'react';

const DecCounter = () => {

    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        // setCounter( counter => counter+10 )
        setCounter( counter + 10 )
    }

    return (
        <div>
            <p>{counter}</p>
            <button
                onClick={clickHandler}
            >Increase counter by 10</button>
        </div>
    )
}

export default DecCounter;