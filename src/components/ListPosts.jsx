import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

const ListPosts = () => {
    const [listAll, setListAll] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchAll = async() => {
            try {
                const response = await fetch(`${API_URL}/posts`)
                const data = await response.json()
                const posts = data.data.posts
                console.log(posts)
                setListAll(posts)
            } catch(err) {
                console.error("ERRRORR TROUBLE LOADING POSTS", err)
            }

        }
        fetchAll();
    },[]);

    const handleButton = (id) => {
        navigate(`/posts/${id}`)
    }

    return (
        <ul>
            {
                listAll.map((post) => {
                    return (
                        <div key={post._id}>
                            <h1>{post.title}</h1>
                            <p>Description: {post.description}</p>
                            <p>Price: {post.price}</p>
                            <p>Seller: {post.author.username}</p>
                            <p>Location: {post.location}</p>
                            <button onClick={() => {handleButton(post._id)}}>See More</button>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default ListPosts