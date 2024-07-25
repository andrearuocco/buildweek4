import { useEffect, useState } from "react"
import JumboMe from "./JumboMe"
import Experience from "./Experience"
import Add from "./Add"

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
        
        <JumboMe key={user._id} user={user} loadMe={loadMe} />
        <Experience key={user._id} id={user._id}/>
        <Add />
       
    </>);
}

export default Me;