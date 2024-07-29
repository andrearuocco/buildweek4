import { useEffect, useState } from "react"
import { ListGroup, Container, Button , Form} from 'react-bootstrap/';

function Experience({ id }) {
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
    return(<Container className='bor-and-me mt-3 bg-white py-3'><h4>Esperienze</h4>{experiences.map(experience => 
        <ListGroup>
            <ListGroup.Item><p > <span className="fw-bold">Ruolo: </span>{experience.role} </p></ListGroup.Item>
            <ListGroup.Item><p > <span className="fw-bold">Company: </span> {experience.company} </p></ListGroup.Item>
            <ListGroup.Item><p > <span className="fw-bold">Data di inizio: </span> {experience.startDate} </p></ListGroup.Item>
            <ListGroup.Item><p > <span className="fw-bold">Data di fine: </span> {experience.endDate} </p></ListGroup.Item>
            <ListGroup.Item><p > <span className="fw-bold">Descrizione: </span> {experience.description} </p></ListGroup.Item>
            <ListGroup.Item><p > <span className="fw-bold">Area: </span> {experience.area} </p></ListGroup.Item>
        </ListGroup>)}
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
    </Container>);
}

export default Experience;