import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

const SinglePost = () => {
    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchDetail = async() => {
            try {
                const response = await fetch(`${API_URL}/posts`)
                const data = await response.json();
                setPost(data.data.posts)
                console.log(data)
                console.log(data.data)
                console.log('posts', data.data.posts)
            } catch(err) {
                console.error("Trouble Loading One Post", err)
            }

        }
        fetchDetail();
    }, [id]);

    return (
        <>
            <h1>SinglePost</h1>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.success}</p>
        </>
    )
}

export default SinglePost