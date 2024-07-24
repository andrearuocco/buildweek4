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
  const API_URL = 'https://striveschool-api.herokuapp.com/api/profile/'
  const token = process.env.REACT_APP_API_STRIVE_LINKEDIN
      const loadProfile = async () => {
          const response = await fetch(API_URL,
              {
                  headers: {
                      "Authorization": "Bearer " + token,
                   
                  },
              })
          const data = await response.json()
          console.log(data)
          setProfiles(data.slice(300, 310))
      }
  useEffect(()=>{loadProfile()}, [])
  return (
    <>
    <BrowserRouter>
      <MyNav />
      <Container>
        <Row>
          <Col md={8}>
            <Routes>
              <Route path='/' element={<Me />} /> 
              <Route path='/people/:id' element={<People profiles={profiles} />} /> 
            </Routes>
          </Col>
          <Col md={4}><Aside profiles={profiles}/></Col>
        </Row>
      </Container>
      <MyFooter />
      </BrowserRouter>

</>

  );
}

export default App;
