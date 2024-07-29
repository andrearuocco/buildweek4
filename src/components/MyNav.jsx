import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import './MyNav.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function MyNav() {


  return (

    <Navbar className="bg-body-white pt-0 pb-0 border-bottom border-1">
      <Container>
        <Navbar.Brand href="#"><Image className='logo' src="data:image/png;base64,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" /></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className='me-5'><Form className="d-flex formWidth">
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="me-5 bg-secondary-subtle"
            aria-label="Search"
          />
        </Form></Nav>
        <Nav className="me-auto text-secondary">
          <Nav.Link className='ps-5 pe-5' href="#home"as={Link} to="/"><div className='d-flex flex-column'><div className='d-flex justify-content-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
          </svg></div><div className='d-none d-md-block fontSize'>Home</div></div></Nav.Link>
          <Nav.Link className='pe-5' href="#rete"><div className='d-flex flex-column'><div className='d-flex justify-content-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg></div><div className='d-none d-md-block fontSize'>Rete</div></div></Nav.Link>
          <Nav.Link className='pe-5' href="#lavoro"><div className='d-flex flex-column'><div className='d-flex justify-content-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
          </svg></div><div className='d-none d-md-block fontSize'>Lavoro</div></div></Nav.Link>
          <Nav.Link className='pe-5' href="#messaggi"><div className='d-flex flex-column'><div className='d-flex justify-content-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg></div><div className='d-none d-md-block fontSize'>Messaggi</div></div></Nav.Link>
          <Nav.Link className='pe-5' href="#notifiche"><div className='d-flex flex-column'><div className='d-flex justify-content-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg></div><div className='d-none d-md-block fontSize'>Notifiche</div></div></Nav.Link>
          {/* <Nav.Link className='pe-5' href="#avatar"><div className='d-flex flex-column'><div className='d-flex justify-content-center '><img className='avatar' src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' /></div><div className='d-none d-md-block text-secondary' style={{ fontSize: '12px' }}>Tu▼</div></div></Nav.Link> */}
          <Dropdown className='d-flex flex-column align-items-center pt-2 pe-5'><img className='avatar' src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
            <Dropdown.Toggle className='p-0 text-secondary d-none d-md-block' id="dropdown-basic" variant='light' style={{ fontSize: '12px' }}>
              Tu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='d-flex flex-column align-items-center pt-2 ps-3 pe-1 border-start'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
          </svg>
            <Dropdown.Toggle className='p-0 text-secondary d-none d-md-block' id="dropdown-basic" variant='light' style={{ fontSize: '12px' }}>
              Per le aziende
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#offerta"><div className='d-flex flex-column'><div className='d-flex justify-content-center'><svg className='text-secondary' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
          </svg></div><div className='d-none d-md-block fontSize overF text-secondary'>Pubblica offerta di lavoro</div></div></Nav.Link>


          {/* <NavDropdown title={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><img className='avatar' src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' /><span style={{ fontSize: '12px' }}>Tu</span> </div>} id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default MyNav;

