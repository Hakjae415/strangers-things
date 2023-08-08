import { useState } from "react"

const CreatePost = ({token}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [willDeliver, setWillDeliver] = useState(false)
    const [location, setLocation] = useState("")

    const handleSubmit = async() => {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        willDeliver,
                        location
                    }
                })
            })
            const result = await response.json()
            console.log(result)
        } catch(err) {
            console.error("Trouble Creating New Post", err)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    Price
                    <input 
                        type="number"
                        placeholder="Enter Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    WillDeliver
                    <select value={willDeliver} onChange={(e) => setWillDeliver(e.target.value)}>
                        <option value={true}>
                            true
                        </option>
                        <option value={false}>
                            false
                        </option>
                    </select>
                </label>
                <label>
                    Location
                    <input
                        type='text'
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <button>Create New Post</button>
            </form>
        </>
    )
}

export default CreatePost