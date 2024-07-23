import { useEffect } from "react"


function Aside() {
 
    const API_URL = 'https://striveschool-api.herokuapp.com/api/profile/'
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
        const loadProfile = async () => {
            const response = await fetch(API_URL,
                {
                  
                    headers: {
                        "Authorization": "Bearer " + token,
                     
                    },
                })
            const data = await response.json()
            console.log(data)
        }
        useEffect(()=>{loadProfile()}, [])
    return(<></>);
        
}

export default Aside;