import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useReactToPrint } from 'react-to-print';


const Courses = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Course-details',
        onAfterPrint: () => alert('Download Successful')
    });



    const courses = useLoaderData();
    const { name, picture, details } = courses;
    return (
        <>
            <Button className='mb-3' variant='dark' onClick={handlePrint}>Download PDF</Button>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                <Card className='w-75 mx-auto' >
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            <div className='text-center mb-5'>
                <Button variant="dark"><Link className='text-decoration-none text-light' to='/checkout'>Get premium access</Link></Button>
            </div>

        </>
    );
};

export default Courses;