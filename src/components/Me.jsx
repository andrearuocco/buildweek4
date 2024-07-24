import { useEffect, useState } from "react"
import Jumbotron from "./Jumbotron"
import Experience from "./Experience"

function Me() {
    const API_URL = 'https://striveschool-api.herokuapp.com/api/profile/me'
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const [user, setUser] = useState('')
    const loadMe = async () => {
        const response = await fetch(API_URL,
            {
                headers: {
                    "Authorization": "Bearer " + token,
                 
                },
            })
            const data = await response.json()
            setUser(data)
    }
    useEffect(()=>{loadMe()}, [])
    return (<>
        
        <Jumbotron key={user._id} user={user}/>
        <Experience key={user._id} id={user._id}/>
       
    </>);
}

export default Me;