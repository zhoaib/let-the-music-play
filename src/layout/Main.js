import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import SideNav from '../Pages/Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <SideNav></SideNav>
                    </Col>

                </Row>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default Main;