import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css'




const Footer = () => {
    return (
        <div className='footer bg-dark'>
            <div>


                <p className='text-light  foot'><br />
                    <br />
                    <br />
                    <small>Copyright &copy; 2022, Let the Music Play</small></p>
                <h5 className='text-light foot'>Find us on <br /> <FaFacebook></FaFacebook> <FaTwitter></FaTwitter> <FaGithub></FaGithub></h5>

            </div>

        </div>

    );
};

export default Footer;