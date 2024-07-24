import { useParams } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap'

function People({profiles}){
    const {id} = useParams(); 
    const profilo = profiles.find(profile => profile._id === id)
    return (
        <>
        <Container className='h-ar p-0 bor-and'>
        <Image src="https://picsum.photos/735/200" className='bor-and-t w-100' />
        <div className='position-relative'>
            <Image src={profilo.image} className='position-absolute h-img-bw w-img-bw pa-ra' />   </div> 
        <div className='d-flex justify-content-between'>
            <div className='mt-4'>
                <p>{profilo.name + ' ' + profilo.surname}</p>
                <p>{profilo.title}</p>
                <p>{profilo.area}</p>
                <div><Button >1</Button><Button >2</Button><Button >3</Button></div>
            </div>
            <div className='d-flex align-items-center'>
                <Image src="https://picsum.photos/40/40" />
                <p>{profilo.title}</p>
            </div>
        </div>
    </Container>
    <Container className='bor-and mt-3'>
        <h4>Attività</h4>
        <p>{profilo.name} non ha pubblicato nessuna attività.</p>
    </Container>
    <Container className='bor-and mt-3'>
        <h4>Bio</h4>
        <p>{profilo.bio}</p>
    </Container> 
        {/* <h1>Questo è il profilo di: {id} {profilo.name} </h1> */}
        </>
    )
}
export default People;