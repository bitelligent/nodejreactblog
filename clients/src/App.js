import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
export default () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate/>

            <h2>Post list</h2>
            <PostList />
        </div>  
    )
}