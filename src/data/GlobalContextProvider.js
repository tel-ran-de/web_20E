import React, {createContext, useEffect, useState} from 'react';

export const GlobalContext = createContext({})

const GlobalContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState(null);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [activePost, setActivePost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetchUsers();
        fetchTodos();
        fetchPosts();
        fetchComments();
    },[])

    const fetchUsers = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch (e) {
            console.log(e.message);
        }
    }

    const fetchTodos = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            setTodos(await response.json());
        } catch (e) {
            console.log(e.message);
        }
    }

    const fetchPosts = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            setPosts(await response.json());
        } catch (e) {
            console.log(e.message);
        }
    }

    const fetchComments = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            setComments(await response.json());
        } catch (e) {
            console.log(e.message);
        }
    }

    const getTodosByUserId = () => todos.filter(t => t.userId === activeUser.id);
    const getPostsByUserId = () => posts.filter(t => t.userId === activeUser.id);
    const getCommentsByPostId = () => comments.filter(c => c.postId === activePost.id)

    const changeActiveUser = userId => {
        const idx = users.findIndex(user => user.id===userId);
        if (idx === -1) return;
        setActiveUser(users[idx]);
    }

    const changeActivePost = postId => {
        const idx = posts.findIndex(post => post.id===postId);
        if (idx === -1) return;
        setActivePost(posts[idx]);
    }


    return (
        <GlobalContext.Provider value={{
            users,
            activeUser,
            activePost,
            changeActiveUser,
            getTodosByUserId,
            getPostsByUserId,
            changeActivePost,
            getCommentsByPostId
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;