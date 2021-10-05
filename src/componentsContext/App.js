import React, {useState} from 'react';
import CompOne from './compOne';
import CompTwo from './compTwo';

export const CountContext = React.createContext({});

const App = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount( count => count + 1 );
    }
    return (
        <CountContext.Provider value={{
            count,
            onClickHandler: increaseCount
        }}>
            <div>
                <CompOne />
                <CompTwo />
            </div>
        </CountContext.Provider>

    )
}

export default App