import { useState } from "react"
import { Form, ListGroup, Modal, Button, ListGroupItem } from "react-bootstrap"

function Group({experience, loadExperience, id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("https://picsum.photos/40/40");
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
            closeModal()
          }
         
        
       
      };

  const fileChange = (ev => {
    const selectedFile = ev.target.files[0]
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));

  })


  const addPictureExperience = async () => {
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const formData = new FormData();
    formData.append('experience', file);

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experience._id}/picture`,
      {
        headers: {
          "Authorization": "Bearer " + token,

        },
        method: 'POST',
        body: formData
} ) 
console.log(file)
if (response.ok) {
  alert("Nuova foto caricata.")
  handleClose()
  setFile(null)
  
  }
}
      
    return(<><ListGroup>
   
         
        <ListGroup.Item><img className="fotoExp" src={imagePreview} onClick={handleShow} />{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="role" onChange={experienceChange} value={formExperience.role} /> : <p > <span className="fw-bold">Ruolo: </span> {experience.role} </p>}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="company" onChange={experienceChange} value={formExperience.company} /> : <p > <span className="fw-bold">Company: </span> {experience.company} </p>}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="startDate" onChange={experienceChange} value={formExperience.startDate} /> : <p > <span className="fw-bold">Data di inizio: </span> {experience.startDate} </p>}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="endDate" onChange={experienceChange} value={formExperience.endDate} /> : <p > <span className="fw-bold">Data di fine: </span> {experience.endDate} </p>}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="description" onChange={experienceChange} value={formExperience.description} /> : <p > <span className="fw-bold">Descrizione: </span> {experience.description} </p>}</ListGroup.Item>
        <ListGroup.Item>{experienceEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="area" onChange={experienceChange} value={formExperience.area} /> : <p > <span className="fw-bold">Area: </span> {experience.area} </p>}</ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-end"><div className="pt-2"><i class="fa-solid fa-pen pe-2" onClick={() => { experienceEditing ? experienceEdit() : editExperience() }}></i> <i class="fa-solid fa-trash" onClick={deleteFinally}></i></div></ListGroup.Item>
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
      {show &&
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi foto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="mb-3">
              <label for="formFile" class="form-label">Carica la tua foto.</label>
              <input class="form-control" type="file" id="formFile" onChange={fileChange} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addPictureExperience}>
              Load
            </Button>
          </Modal.Footer>
        </Modal>
  
      }
    </>
)

}

export default Group