import { useEffect, useState } from "react"
import { Image, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import './Aside.css';

function Aside({profiles}) {

    return(
        <>{profiles.map(profile => /*inizioComponent*/<ul className="d-flex list-unstyled">
            <li><Image src={profile.image} className="w-img-bw-ar h-img-bw-ar bor-rad-ar" /></li>
            <ul className="d-flex flex-column list-unstyled">
                <li>{profile.name}{profile.surname}</li>
                <li>{profile.title}</li>
                <li><Button as={Link} to={`/people/${profile._id}`} variant="info">Collegati</Button></li>
            </ul>
        </ul>/*fineComponent*/)}</>
    );  
}

export default Aside;