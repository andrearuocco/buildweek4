import { useState } from 'react'
import './JumboMe.css'
import { Button, Container, Form, Image } from 'react-bootstrap'

function JumboMe({ user, loadMe }) {
    /* andrea 25 luglio */
    const [isEditing, setIsEditing] = useState(false)
    const editForm = () => {
        setIsEditing(!isEditing)
      }
    const [formValue, setformValue] = useState({
        title: user.title,
        area: user.area,
        bio: user.bio,
        id: user._id
    }) 
    const handleEdit = async () => {
        const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
       
            const API_URL = `https://striveschool-api.herokuapp.com/api/profile/`
              const response = await fetch(API_URL, {
                headers: {
                  "Authorization": "Bearer " + token,
                    
                    
                    "Content-Type": "application/json"
                },
                method: 'PUT',
                body: JSON.stringify(formValue)
              })
              if(response.ok){
                loadMe()
                alert("Modificato correttamente")
                setIsEditing(false)
              }
    }
    const handleChange = (ev => {
        setformValue({...formValue, [ev.target.name]:ev.target.value})
      })
 /*    const handleEdit = async () => {
        
      const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
        try {
        const API_URL = `https://striveschool-api.herokuapp.com/api/profile/`
          const response = await fetch(API_URL, {
            headers: {
              "Authorization": token,
             
            },
            method: 'PUT',
            body: JSON.stringify(formValue)
          })
          if(response.ok){
            loadMe
            alert("Modificato correttamente")
          }
          else {
            alert()
          }
        }
      
        catch(error) {
          setAlert({message: "Commento Riprova più tardi", success: false})
        }
      
        setTimeout(()=> {setAlert(null)}, 6000)
      };  */

    return(<>
        <Container className='p-0 bor-and'>
            <Image src="https://picsum.photos/735/200" className='h-50 bor-and-t-me w-100' />
            <div className='position-relative'>
                <Image src={user.image} className='position-absolute h-img-bw-me w-img-bw-me pa-ra-me' />   </div>
            <div className='d-flex justify-content-between'>
                <div className='mt-4'>
                    <p>{user.name + ' ' + user.surname}</p><i onClick={() => { isEditing ? handleEdit() : editForm() }} class="fa-solid fa-pen-to-square"></i>
                    {isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="title" onChange={handleChange} value={formValue.title} /> : user.title }
                     {isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="area" onChange={handleChange} value={formValue.area} /> : user.area} 
                    <div><Button >1</Button><Button >2</Button><Button >3</Button></div>
                </div>
                <div className='d-flex align-items-center'>
                    <Image src="https://picsum.photos/40/40" />
                    {isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="title" onChange={handleChange} value={formValue.title} /> : user.title }
                </div>
            </div>
        </Container>
        <Container className='bor-and-me mt-3'>
            <h4>Attività</h4>
            <p>{user.name} non ha pubblicato nessuna attività.</p>
        </Container>
        <Container className='bor-and-me mt-3'>
            <h4>Bio</h4>
             {isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="bio" onChange={handleChange} value={formValue.bio} /> : user.bio}
        </Container>
    </>)
}

export default JumboMe;