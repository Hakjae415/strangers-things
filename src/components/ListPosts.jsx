import { useState, useEffect } from "react"

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts"

const ListPosts = () => {
    const [listAll, setListAll] = useState([])

    useEffect(() => {
        const fetchAll = async() => {
            const response = await fetch(API_URL)
            const data = await response.json()
            const posts = data.data.posts
            console.log(posts)
            setListAll(posts)
        }
        fetchAll();
    },[]);

    return (
        <ul>
            {
                listAll.map((post) => {
                    return (
                        <>
                            <h1>{post.title}</h1>
                            <p>Description: {post.description}</p>
                            <p>Price: {post.price}</p>
                            <p>Seller: {post.author.username}</p>
                            <p>Location: {post.location}</p>
                            <button>See More</button>
                        </>
                    )
                })
            }
        </ul>
    )
}

export default ListPosts