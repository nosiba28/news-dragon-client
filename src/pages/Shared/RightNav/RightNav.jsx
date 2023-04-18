import Button from 'react-bootstrap/Button';
import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone></QZone>
            </div>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;