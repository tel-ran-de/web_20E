import React, {useContext} from 'react';
import {CountContext} from './App'

export default () => {
    const cntx = useContext(CountContext)
    return (
        <div>
            {cntx.count}
        </div>
    )
}