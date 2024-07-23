import './App.css';
import MyNav from './components/MyNav';
import Aside from './components/Aside';
import { Container, Col, Row } from 'react-bootstrap';
import Me from './components/Me';


function App() {
  return (
<>
<MyNav />
<Container><Row><Col md={8}><Me /></Col><Col md={4}><Aside /></Col></Row>
</Container>

</>

  );
}

export default App;
