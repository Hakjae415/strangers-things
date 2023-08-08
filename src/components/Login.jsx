import { useState } from "react";

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

const Login = ({setToken}) => {
    const [user, setUser] = useState("");
    const [pw, setPw] = useState("")
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username: user,
                        password: pw
                    }
                })
            });
            const result = await response.json();
            console.log("Login result", result)
            console.log("login token", result.data.token)
            setToken(result.data.token)
        } catch(err) {
            console.err("Trouble Logging in", err)
        }
    }

    return (
        <>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <label>
                Username
                <input
                    type='text'
                    placeholder="Enter Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    />
            </label>
            <label>
                Password
                <input
                    type='text'
                    placeholder="Enter Password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    />
            </label>
            <button>Submit</button>
          </form>
        </>
    )
}

export default Login