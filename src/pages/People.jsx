import { useParams } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap'
import { useEffect, useState } from "react"
import Experience from '../components/Experience';
import Jumbotron from '../components/Jumbotron';

function People() {
    const { id } = useParams();
    const [profile, setProfile] = useState("")
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const goToProfile = async () => {
        const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}`
        const response = await fetch(API_URL,
            {
                headers: {
                    "Authorization": "Bearer " + token,

                },
            })
        const data = await response.json()
        console.log(data)
        setProfile(data)
    }
    useEffect(() => { goToProfile() }, [id])

    // const profilo = profiles.find(profile => profile._id === id)
    return (
        <>
            <Jumbotron key={profile._id} user={profile}/>
            <Experience id={id}/>
        </>
    )
}
export default People;