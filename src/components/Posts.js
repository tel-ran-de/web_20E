import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
import ActivePost from "./ActivePost";

const Posts = () => {
    const {activeUser, getPostsByUserId, activePost, changeActivePost} = useContext(GlobalContext);
    return (
        !activeUser || !getPostsByUserId().length
            ?
            <li className="list-group-item">No records</li>
            :
            getPostsByUserId().map(post =>
                <li
                    className="list-group-item"
                    key={post.id}
                >
                    <h3
                        style={{cursor: "pointer"}}
                        className={activePost && activePost.id === post.id ? 'alert alert-info' : ''}
                        onClick={()=> {changeActivePost(post.id)}}
                    >{post.title}</h3>
                    { activePost && activePost.id === post.id ?
                        <ActivePost />
                        : null}
                </li>
            )
    )
}

export default Posts;