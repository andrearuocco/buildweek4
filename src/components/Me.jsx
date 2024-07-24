import { useEffect, useState } from "react"
import Jumbotron from "./Jumbotron"
import Experience from "./Experience"

function Me({profiles}) {
    const API_URL = 'https://striveschool-api.herokuapp.com/api/profile/me'
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const [me, setMe] = useState('')
    const loadMe = async () => {
        const response = await fetch(API_URL,
            {
                headers: {
                    "Authorization": "Bearer " + token,
                 
                },
            })
            const data = await response.json()
            setMe(data)
    }
    useEffect(()=>{loadMe()}, [])
    return (<>
        
        <Jumbotron key={me._id} me={me} profiles={profiles}/>
        <Experience key={me._id} me={me}/>
       
    </>);
}

export default Me;