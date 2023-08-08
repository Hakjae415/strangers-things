import { useState } from 'react'

const API_URL = "https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF"

// const Authenticate = async({token}) => {
//     try {
//         const response = await fetch(`${API_URL}/someEndPoint`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 token
//             })
//         })
//         const result = await response.json()
//         console.log(result)
//     } catch(err) {
//         console.err("ERROR TROUBLE AUTHENTICATING", err)
//     }
    
// }
const Authenticate = ({ token }) => {
    const [userData, setUserData] = useState(null)

    const handleClick = async() => {
        try {
            const response = await fetch(`${API_URL}/authenticate`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            // setUserData(data.data.token)
            setUserData(data)
            console.log(data)
        } catch(err) {
            console.error("ERRROR TROUBLE AUTHENTICATING", err)
        }
    }
    return (
        <>
          <h2>Authenticate</h2>
          <button onClick={handleClick}>Authenticate Token</button>
          {userData && <><p>Username: {userData.username}</p><p>IAT: {userData.iat}</p></>}
        </>
    )
};

export default Authenticate;