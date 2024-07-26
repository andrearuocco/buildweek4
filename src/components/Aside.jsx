import { useEffect, useState } from "react"
import { Image, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import './Aside.css';

function Aside() {
<<<<<<< HEAD
    const [profiles, setProfiles] = useState([])
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
            setProfiles(data.slice(300, 310))
        }
    useEffect(()=>{loadProfile()}, [])
=======
const [profiles, setProfiles] = useState([])
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
          setProfiles(data.slice(300, 310))
      }
  useEffect(()=>{loadProfile()}, [])

>>>>>>> master
    return(
        <>{profiles.map(profile => /*inizioComponent*/<ul className="d-flex list-unstyled">
            <li><Image src={profile.image} className="w-img-bw-ar h-img-bw-ar bor-rad-ar" /></li>
            <ul className="d-flex flex-column list-unstyled">
                <li>{profile.name}{profile.surname}</li>
                <li>{profile.title}</li>
                <li><Button as={Link} to={`/people/${profile._id}`} variant="info">Collegati</Button></li>
            </ul>
        </ul>/*fineComponent*/)}</>
    );  
}

export default Aside;