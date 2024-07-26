import './Jumbotron.css'
import { Button, Container, Image } from 'react-bootstrap'


function Jumbotron({ user }) {

    return(<>
        <Container className='p-0 bor-and'>
            <Image src="https://picsum.photos/735/200" className='h-50 bor-and-t w-100' />
            <div className='position-relative'>
                <Image src={user.image} className='position-absolute h-img-bw w-img-bw pa-ra' />   </div>
            <div className='d-flex justify-content-between'>
                <div className='mt-4'>
                    <p>{user.name + ' ' + user.surname}</p>
                    <p>{user.title}</p>
                    <p>{user.area}</p>
                    <div><Button >Disponibile per</Button><Button >Aggiungi sezione profilo</Button><Button >Migliora profilo</Button></div>
                </div>
                <div className='d-flex align-items-center'>
                    <Image src="https://picsum.photos/40/40" />
                    <p>{user.title}</p>
                </div>
            </div>
        </Container>
        <Container className='bor-and mt-3'>
            <h4>Attività</h4>
            <p>{user.name} non ha pubblicato nessuna attività.</p>
        </Container>
        <Container className='bor-and mt-3'>
            <h4>Bio</h4>
            <p>{user.bio}</p>
        </Container>
    </>)
}

export default Jumbotron;