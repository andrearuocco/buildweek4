import './App.css';
import MyNav from './components/MyNav';
import Aside from './components/Aside';
import { Container, Col, Row } from 'react-bootstrap';
import Me from './components/Me';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import People from './pages/People';
import { useEffect, useState } from "react"



function App() {
  const [profiles, setProfiles] = useState([])
  
  const loadProfile = async () => {
    const API_URL = 'https://striveschool-api.herokuapp.com/api/profile/'
    const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
    const response = await fetch(API_URL,
        {
            headers: {
                "Authorization": "Bearer " + token,

            },
        })
    const data = await response.json()
    //console.log(data)
    setProfiles(data)
}
useEffect(() => { loadProfile() }, [])
  return (
    <>
    <BrowserRouter>
      <MyNav profiles={profiles} />
      <div className='bg-pp'>
      <div className='d-flex justify-content-center align-items-center bg-pp'>
      <Container >
        <Row>
          <Col sm={12} md={9} >
            <Routes>
              <Route path='/' element={<Me />} /> 
              <Route path='/people/:id' element={<People  />} /> 
            </Routes>
          </Col>
          <Col sm={12} md={3} ><Aside profiles={profiles} loadProfile={loadProfile} /></Col>
        </Row>
      </Container>
      
      </div>
      <MyFooter />
      </div>
      </BrowserRouter>

</>

  );
}

export default App;
