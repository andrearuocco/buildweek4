import { useEffect, useState } from "react"
import { Image, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import './Aside.css';

function Aside() {
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
          //console.log(data)
          setProfiles(data.slice(300, 310))
      }
  useEffect(()=>{loadProfile()}, [])

    return(
        <div className="mt-4 bor-and mt-4 bg-white">

        {profiles.map(profile => /*inizioComponent*/<ul className="d-flex align-items-center  list-unstyled ms-sm-0 ms-md-5 ">
            <li><Image src={profile.image} className="w-img-bw-ar h-img-bw-ar bor-rad-ar" /></li>
            <ul className="d-flex flex-column list-unstyled border-bottom p-2 ">
                <li>{profile.name}{profile.surname}</li>
                <li>{profile.title}</li>
                <li><Button as={Link} to={`/people/${profile._id}`} variant="info">Visualizza Profilo</Button></li>
            </ul>
        </ul>/*fineComponent*/)}</div>
    );  
}

export default Aside;