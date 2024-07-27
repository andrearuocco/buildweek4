import { useState } from 'react';
import { Button , Form} from 'react-bootstrap/';

function Add({id, loadExperience}) {
    const [form, setForm] = useState(false) //per far vedere il form
    const openForm = () =>{
        setForm(true)
    } 
      const initialExperience = {
        "role": '',
        "company": '',
        "startDate": '',
        "endDate": '',
        "description": '',
        "area": ''
    } 
  const [newExperience, setNewExperience] = useState(initialExperience )
 /*  const [alertTwo, setAlertTwo] = useState(false)
      const deleteFinally = () => {
        setAlertTwo(true)
      }
      const closeModal = () => {
        setAlertTwo(false)
      }     */
    const  addExperience = async () => {
       const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
       
            const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
            const response = await fetch(API_URL,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                        "Content-Type": "application/json"
                    },
                    method: 'POST',
                    body: JSON.stringify(newExperience)
                }
                
            )
            console.log(newExperience)
            if (response.ok) {
              alert("Esperienza aggiunto")
              loadExperience()
               
                setNewExperience(initialExperience)
              setForm(false)
                
            } 

           
                

      
       

    } 
    const experienceChange = (ev => {
      setNewExperience({...newExperience, [ev.target.name]:ev.target.value})
  })
    return(<> <Button onClick={openForm} className='w-25 mt-3'variant="primary">Aggiungi Esperienza</Button>
      {form && <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="role" onChange={experienceChange} value={newExperience.role} placeholder="scrivi qui il tuo role..."/>
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="company" onChange={experienceChange} value={newExperience.company} placeholder="scrivi qui il tuo company..."/>
            <Form.Control type='date' className='mb-3 w-100' aria-label="With textarea" name="startDate" onChange={experienceChange} value={newExperience.startDate} placeholder="scrivi qui il tuo startDate..."/>
            <Form.Control type='date' className='mb-3 w-100' aria-label="With textarea" name="endDate" onChange={experienceChange} value={newExperience.endDate} placeholder="scrivi qui il tuo endDate..."/>
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="description" onChange={experienceChange} value={newExperience.description} placeholder="scrivi qui il tuo description..."/>
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="area" onChange={experienceChange} value={newExperience.area} placeholder="scrivi qui il tuo area..."/>
            </Form.Group>
      
            <Button variant="primary" type="button" onClick={addExperience} >
              Submit
            </Button>
          </Form>}</>)
   
}

export default Add