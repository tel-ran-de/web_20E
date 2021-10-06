import React from 'react'
import Users from "./Users";
import Posts from "./Posts";

export default props => (
    <>
        <h2 className="my-5">Posts Page</h2>
        <div className="row">
            <div className="col-4">
                <Users />
            </div>
            <div className="col-8">
                <ul className="list-group">
                    <Posts />
                </ul>
            </div>
        </div>
    </>
)