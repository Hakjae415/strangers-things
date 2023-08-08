import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import './App.css'
import ListPosts from './components/ListPosts'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Authenticate from "./components/Authenticate"
import SinglePost from "./components/SinglePost"
import CreatePost from "./components/CreatePost"

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home token={token}/>}/>
        <Route path="/posts" element={<ListPosts/>}/>
        <Route path="/users/register" element={<Register token={token}setToken={setToken}/>}/>
        <Route path="/users/me" element={<Profile/>}/>
        <Route path="/users/authenticate" element={<Authenticate token={token} setToken={setToken}/>}/>
        <Route path="/posts/:id" element={<SinglePost/>}/>
        <Route path="/posts/create" element={<CreatePost token={token}/>}/>
      </Routes>
    </>
  )
}

export default App
