import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";


const Comments = () => {
    const {getCommentsByPostId} = useContext(GlobalContext)

    return (
        !getCommentsByPostId().length ? <li className="list-group-item">No Comments</li> :
            getCommentsByPostId().map((comment) =>
                <li className="list-group-item" key={comment.id}>
                    <strong>{comment.email}</strong>
                    <div>{comment.body}</div>
                </li>
            )
    )
}

export default Comments