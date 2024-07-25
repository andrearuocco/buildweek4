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
  
  return (
    <>
    <BrowserRouter>
      <MyNav />
      <div className='d-flex justify-content-center align-items-center bg-pp'>
      <Container >
        <Row>
          <Col md={8} >
            <Routes>
              <Route path='/' element={<Me />} /> 
              <Route path='/people/:id' element={<People  />} /> 
            </Routes>
          </Col>
          <Col md={4} ><Aside /></Col>
        </Row>
      </Container>
      
      </div>
      <MyFooter />
      </BrowserRouter>

</>

  );
}

export default App;
