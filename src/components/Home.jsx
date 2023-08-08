import { Link } from "react-router-dom"
import Login from "./Login"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Login />
            <Link to="/users/register">No User? Register Here.</Link>
        </>
    )
}

export default Home