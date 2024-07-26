import { useEffect, useState } from "react"
import { ListGroup, Container, Button , Form} from 'react-bootstrap/';
import Group from "./Group";
import Add from "./Add";

function ExperienceMe({ id, user }) {
    const [experiences, setExperiences] = useState([])
 /*    const [form, setForm] = useState(false) //per far vedere il form
    const openForm = () =>{
        setForm(true)
    } */
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const loadExperience = async () => {
        const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
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
    useEffect(()=>{loadExperience()}, [id])
    return(<Container className=''><h4>Esperienze</h4>{experiences.map(experience => <Group key={experience} experience={experience} id={id} loadExperience={loadExperience}/>
       /*  <ListGroup>
            <ListGroup.Item>{experience.role}</ListGroup.Item>
            <ListGroup.Item>{experience.company}</ListGroup.Item>
            <ListGroup.Item>{experience.startDate}</ListGroup.Item>
            <ListGroup.Item>{experience.endDate}</ListGroup.Item>
            <ListGroup.Item>{experience.description}</ListGroup.Item>
            <ListGroup.Item>{experience.area}</ListGroup.Item>
        </ListGroup> */)}
 {/*   <Button onClick={openForm} className='w-25'variant="primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></Button>
{form && <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>} */}
    <Add key={user._id} id={user._id} loadExperience={loadExperience} />
    </Container>);
}

export default ExperienceMe;