import { useState, useEffect } from "react"

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

const Profile = ({token}) => {
    const [user, setUser] = useState({})
    console.log('token', token)
    useEffect(() => {
        const MyData = async() => {
            try {
                const response = await fetch(`${API_URL}/users/me`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                const result = await response.json();
                console.log(result)
                setUser(result)
            } catch(err) {
                console.error("ERROR LOADING PROFILE", err)
            }

        }
        MyData();
    }, [])

    return (
        <>
            <h1>Profile</h1>
        </>
    )
}

export default Profile