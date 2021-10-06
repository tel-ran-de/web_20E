import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
import Comments from "./Comments";

const ActivePost = () => {
    const {activePost} = useContext(GlobalContext)
    return (
        <div className="card">
            <div className="card-body">
                {activePost.body}
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <Comments />
                </ul>
            </div>
        </div>
    )
}

export default ActivePost;