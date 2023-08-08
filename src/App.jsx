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
import { useEffect } from "react"

function App() {
  const [token, setToken] = useState(null)


    const deletePost = async(id) => {
      id.preventDefault()
      try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        const result = await response.json()
        console.log(result)
      } catch(err) {
        console.error("Trouble deleting post", err)
      }
    }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken}/>}/>
        <Route path="/posts" element={<ListPosts deletePost={deletePost}/>}/>
        <Route path="/users/register" element={<Register token={token}setToken={setToken}/>}/>
        <Route path="/users/me" element={<Profile token={token}/>}/>
        <Route path="/users/authenticate" element={<Authenticate token={token} setToken={setToken}/>}/>
        <Route path="/posts/:id" element={<SinglePost/>}/>
        <Route path="/posts/create" element={<CreatePost token={token}/>}/>
      </Routes>
    </>
  )
}

export default App
