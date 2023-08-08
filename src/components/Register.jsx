import { useState } from "react"
import Authenticate from "./Authenticate";

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

const Register = ({setToken, token}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/users/register`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                })
            })
            const result = await response.json()
            console.log(result)
            console.log("token", result.data.token)
            setToken(result.data.token)
        } catch(err) {
            console.error("ERRR TROUBLE REGISTERING", err)
        }
    }
    return (
        <>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username
              <input 
                placeholder='Enter Username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
              Password
              <input 
                placeholder='Enter Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button>Submit</button>
          </form>
          <Authenticate token={token}/>
        </>
    )
};

export default Register