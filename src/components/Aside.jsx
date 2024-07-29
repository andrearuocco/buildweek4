import { useEffect, useState } from "react"
import { Image, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import './Aside.css';

function Aside({profiles}) {
    

    profiles = profiles.slice(300, 315)
   

    return(
        <div className="mt-4 bor-and mt-4 bg-white">

        {profiles.map(profile => /*inizioComponent*/<ul className="d-flex align-items-center  list-unstyled ms-sm-0 ms-md-5 ">
            <li><Image src={profile.image} className="w-img-bw-ar h-img-bw-ar bor-rad-ar" /></li>
            <ul className="d-flex flex-column list-unstyled border-bottom p-2 ">
                <li>{profile.name}{profile.surname}</li>
                <li>{profile.title}</li>
                <li><Button as={Link} to={`/people/${profile._id}`} variant="info">Visualizza Profilo</Button></li>
            </ul>
        </ul>/*fineComponent*/)}</div>
    );  
}

export default Aside;