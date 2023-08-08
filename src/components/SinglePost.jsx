import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

const SinglePost = () => {
    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchDetail = async() => {
            const response = await fetch(`${API_URL}/${id}`)
            const data = await response.json();
            setPost(data)
            console.log(data)
        }
        fetchDetail();
    }, []);

    return (
        <>
            <h1>SinglePost</h1>
        </>
    )
}

export default SinglePost