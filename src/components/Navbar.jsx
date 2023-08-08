import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/posts">Posts</Link>
            <Link className="links" to="/users/me">Profile</Link>
            <Link className="links" to="/posts/create">Create Post</Link>
        </>
    )
}

export default Navbar