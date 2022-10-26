import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
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
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="light" variant="light">

            <Container>
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block me-3 align-top rounded-circle"
                    alt=" logo"
                />
                <Navbar.Brand><Link to='/'>Let the Music Play</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <><Button className='me-4' variant='dark'><Link to='/'>Courses</Link></Button></>
                        <><Button variant='dark'><Link to='/blog'>Blog</Link></Button></>

                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
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
                                        <Button className='me-4' variant='dark'><Link to='/login'>Login</Link></Button>
                                        <Button className='me-4' variant='dark'><Link to='/register'>Register</Link></Button>
                                    </>
                            }
                        </>
                        <Link to='/profile'>

                            {
                                user?.photoURL ?
                                    <Image className='ms-4' style={{ height: '35px' }} roundedCircle src={user?.photoURL}></Image>
                                    : <FaUserAlt></FaUserAlt>
                            }


                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;