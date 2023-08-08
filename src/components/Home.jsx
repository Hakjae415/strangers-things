import { Link } from "react-router-dom"
import Login from "./Login"

const Home = ({token, setToken}) => {
    return (
        <>
            <h1>Home</h1>
            <Login token={token} setToken={setToken}/>
            <Link to="/users/register">No User? Register Here.</Link>
        </>
    )
}

export default Home