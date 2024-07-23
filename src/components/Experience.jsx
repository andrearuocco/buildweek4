import { useEffect, useState } from "react"
import { ListGroup, Container } from 'react-bootstrap/';

function Experience({ me }) {
    const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${me._id}/experiences`
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const [experiences, setExperiences] = useState([])
    const loadExperience = async () => {
        const response = await fetch(API_URL,
            {
                headers: {
                    "Authorization": "Bearer " + token,
                },
            })
        const data = await response.json()
        console.log(data)
        setExperiences(data)
        
    }

    useEffect(()=>{loadExperience()}, [])
    return(<Container className=''><h4>Esperienze</h4>{experiences.map(experience => 
        <ListGroup>
            <ListGroup.Item>{experience.role}</ListGroup.Item>
            <ListGroup.Item>{experience.company}</ListGroup.Item>
            <ListGroup.Item>{experience.startDate}</ListGroup.Item>
            <ListGroup.Item>{experience.endDate}</ListGroup.Item>
            <ListGroup.Item>{experience.description}</ListGroup.Item>
            <ListGroup.Item>{experience.area}</ListGroup.Item>
        </ListGroup>
    )}</Container>);
}

export default Experience;