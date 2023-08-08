import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/users/me">Profile</Link>
        </>
    )
}

export default Navbar