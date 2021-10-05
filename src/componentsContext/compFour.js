import React, {useContext} from 'react';
import {CountContext} from "./App";

export default () => {
    const context = useContext(CountContext);
    return (
        <div>
            <button
                onClick={context.onClickHandler}
            >Click Me
            </button>
        </div>
    )
}