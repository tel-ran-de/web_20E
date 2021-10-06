import React, {useContext} from 'react';
import {CountContext} from "./App";

export default () => {
    const {onClickHandler} = useContext(CountContext);
    return (
        <div>
            <button
                onClick={onClickHandler}
            >Click Me
            </button>
        </div>
    )
}