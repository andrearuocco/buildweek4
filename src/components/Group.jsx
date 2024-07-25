import { useState } from "react"
import { Form, ListGroup, Modal, Button } from "react-bootstrap"

function Group({experience, loadExperience, id}) {
    const [experienceEditing, setExperienceEditing] = useState(false)
    const editExperience = () => {
        setExperienceEditing(!experienceEditing)
      }
    const [formExperience, setformExperience] = useState({
        "role": experience.role,
        "company": experience.company,
        "startDate": experience.startDate,
        "endDate": experience.endDate,
        "description": experience.description,
        "area": experience.area
    }) 
     const experienceEdit = async () => {
        const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
       
            const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experience._id}`
              const response = await fetch(API_URL, {
                headers: {
                  "Authorization": "Bearer " + token,
                    
                    
                    "Content-Type": "application/json"
                },
                method: 'PUT',
                body: JSON.stringify(formExperience)
              })
              if(response.ok){
               loadExperience()
                alert("Modificato correttamente")
                setExperienceEditing(false)
              }
    } 
    const experienceChange = (ev => {
        setformExperience({...formExperience, [ev.target.name]:ev.target.value})
      })


      const [alertTwo, setAlertTwo] = useState(false)
      const deleteFinally = () => {
        setAlertTwo(true)
      }
      const closeModal = () => {
        setAlertTwo(false)
      }
      const deleteExperience = async () => {
        const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
       
        const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experience._id}`
          const response = await fetch(API_URL, {
    
            headers: {
              "Authorization": "Bearer " + token,
              "Content-Type": "application/json"
            },
            method: 'DELETE',
          })
          if(response.ok){
            loadExperience()
            alert("Cancellato correttamente")
          }
         
        
       
      };
    return(<ListGroup>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="role" onChange={experienceChange} value={formExperience.role} /> : experience.role}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="company" onChange={experienceChange} value={formExperience.company} /> : experience.company}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="startDate" onChange={experienceChange} value={formExperience.startDate} /> : experience.startDate}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="endDate" onChange={experienceChange} value={formExperience.endDate} /> : experience.endDate}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="description" onChange={experienceChange} value={formExperience.description} /> : experience.description}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="area" onChange={experienceChange} value={formExperience.area} /> : experience.area}</ListGroup.Item>
        <ListGroup.Item><i class="fa-solid fa-pen" onClick={() => { experienceEditing ? experienceEdit() : editExperience() }}></i> <i class="fa-solid fa-trash" onClick={deleteFinally}></i></ListGroup.Item>
        {alertTwo && 
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal.Dialog>
          <Modal.Body>
            <h4>Sicuro di voler cancellare?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={closeModal}>CHIUDI</Button>
            <Button variant="danger" onClick={() => { deleteExperience() }}>ELIMINA</Button>
          </Modal.Footer>
        </Modal.Dialog>
    </div>}
    </ListGroup>
    
)

}

export default Group