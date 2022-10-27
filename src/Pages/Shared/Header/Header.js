import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../images/logo.jpg'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-5 ' expand="lg" bg='dark'  >

            <Container>
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block me-3 align-top rounded-circle"
                    alt=" logo"
                />
                <Navbar.Brand><Link className='text-decoration-none text-light' to='/'>Let the Music Play</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <><Button className='me-4' variant='dark'><Link className='text-decoration-none text-light' to='/'>Courses</Link></Button></>

                        <><Button className='me-4' variant='dark'><Link className='text-decoration-none text-light' to='/blog'>Blog</Link></Button></>

                        <><Button className='me-4' variant='dark'><Link className='text-decoration-none text-light' to='/faq'>F&Q</Link></Button></>

                        <><Button className='me-4 ' variant='light'><NavDropdown title="Theme" id="basic-nav-dropdown">
                            <NavDropdown.Item >Light</NavDropdown.Item>
                            <NavDropdown.Item >Dark</NavDropdown.Item>

                        </NavDropdown></Button></>




                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button className='me-4' variant='dark'> {user?.displayName}</Button>
                                        <Button variant='dark' onClick={handleLogOut}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Button className='me-4 ' variant='dark'><Link className='text-decoration-none text-light' to='/login'>Login</Link></Button>
                                        <Button className='me-4' variant='dark'><Link className='text-decoration-none text-light' to='/register'>Register</Link></Button>
                                    </>
                            }
                        </>
                        <Link to='/profile'>

                            {
                                user?.photoURL ?
                                    <Image className='ms-4' data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName} style={{ height: '35px' }} roundedCircle src={user?.photoURL}></Image>
                                    : <FaUserAlt className='text-dark'></FaUserAlt>
                            }


                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;