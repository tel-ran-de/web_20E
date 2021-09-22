import React, {useEffect, useState} from "react";

const RedClock = () => {

    const [timeNow, setTimeNow] = useState(0)

    const renderClock = () => {
        return !timeNow ? (<span>No time</span>) : (<span>{timeNow} sec</span>)
    }

    useEffect(() => {
        const timeOne = setInterval(()=>{
            setTimeNow( timeNow => {
                if ( timeNow === 10 ) {
                    clearInterval(timeOne);
                    return timeNow;
                }
                return timeNow + 1;
            });


        }, 1000);
    }, []);



    return (
        <div style={{color: 'red', paddingLeft: timeNow*10+"px"}}>
            {renderClock()}
        </div>
    )
}

export default RedClock;