import './Jumbotron.css'
import { Button, Container, Image } from 'react-bootstrap'


function Jumbotron({ me }) {

    return(<>
        <Container className='p-0 bor-and'>
            <Image src="https://picsum.photos/735/200" className='h-50 bor-and-t w-100' />
            <div className='position-relative'>
                <Image src={me.image} className='position-absolute h-img-bw w-img-bw pa-ra' />   </div>
            <div className='d-flex justify-content-between'>
                <div className='mt-4'>
                    <p>{me.name + ' ' + me.surname}</p>
                    <p>{me.title}</p>
                    <p>{me.area}</p>
                    <div><Button >1</Button><Button >2</Button><Button >3</Button></div>
                </div>
                <div className='d-flex align-items-center'>
                    <Image src="https://picsum.photos/40/40" />
                    <p>{me.title}</p>
                </div>
            </div>
        </Container>
        <Container className='bor-and mt-3'>
            <h4>Attività</h4>
            <p>{me.name} non ha pubblicato nessuna attività.</p>
        </Container>
        <Container className='bor-and mt-3'>
            <h4>Bio</h4>
            <p>{me.bio}</p>
        </Container>
    </>)
}

export default Jumbotron;