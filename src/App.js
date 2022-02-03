import React from "react";
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import CarsPage from "./pages/CarsPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import UserPostsPage from "./pages/UserPostsPage";
import PostCommentsPage from "./pages/PostCommentsPage";
import TypeScriptPage from './pages/TypeScriptPage';

function App() {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route path={''} element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'posts/:userId'} element={<UserPostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'posts/:postId/comments'} element={<PostCommentsPage/>}/>
                <Route path={'typescript'} element={<TypeScriptPage/>}/>
            </Route>
        </Routes>
    )
}

export default App;
