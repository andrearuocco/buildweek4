import { useState } from 'react'
import './JumboMe.css'
import { Button, Container, Form, Image, Modal } from 'react-bootstrap'

function JumboMe({ user, loadMe }) {
  /* andrea 25 luglio */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState(null)
  const fileChange = (ev => {
    setFile(ev.target.files[0])

  })


  const addPicture = async () => {
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const formData = new FormData();
    formData.append('profile', file);
    const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`
    const response = await fetch(API_URL,
      {
        headers: {
          "Authorization": "Bearer " + token,

        },
        method: 'POST',
        body: formData
      }

    )

    if (response.ok) {
      alert("Nuova foto caricata.")
      handleClose()
      setFile(null)
      loadMe()
    }
  }
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
    if (response.ok) {
      loadMe()
      alert("Modificato correttamente")
      setIsEditing(false)
    }
  }
  const handleChange = (ev => {
    setformValue({ ...formValue, [ev.target.name]: ev.target.value })
  })
  return (<>
    <Container className='p-0 pb-4 bor-and mt-4 bg-white'>
      <Image src="https://picsum.photos/735/200" className='h-50 bor-and-t-me w-100' />
      <div className='position-relative'>
        <Image src={file === null ? user.image : file.name} className='position-absolute h-img-bw-me w-img-bw-me pa-ra-me' onClick={handleShow} />   </div>
      <div className='d-flex justify-content-between ps-3'>
        <div className='mt-4 d-flex flex-column'>
          <p>{user.name + ' ' + user.surname}</p><i onClick={() => { isEditing ? handleEdit() : editForm() }} class="fa-solid fa-pen-to-square"></i>
          <div>{isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="title" onChange={handleChange} value={formValue.title} /> : user.title}
          </div><div>{isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="area" onChange={handleChange} value={formValue.area} /> : user.area}</div>
          <div><Button className='me-1' >Collegati</Button><Button className='me-1 text-primary' variant="outline-primary" >+ Segui</Button><Button variant="outline-secondary" >Altro</Button></div>
        </div>
        <div className='d-flex align-items-center pe-3 '>
          <Image className='b-rad' src="https://picsum.photos/40/40" />
          {isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="title" onChange={handleChange} value={formValue.title} /> : user.title}
        </div>
      </div>
    </Container>
    <Container className='bor-and-me mt-3 bg-white py-3'>
      <h4>Attività</h4>
      <p>{user.name} non ha pubblicato nessuna attività.</p>
    </Container>
    <Container className='bor-and-me mt-3 bg-white py-3'>
      <h4>Bio</h4>
      {isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="bio" onChange={handleChange} value={formValue.bio} /> : user.bio}
    </Container>
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
          <Button variant="primary" onClick={addPicture}>
            Load
          </Button>
        </Modal.Footer>
      </Modal>

    }
  </>)
}

export default JumboMe;