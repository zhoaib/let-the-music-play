import React from 'react';
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {
    const { id, name, picture, details } = course;
    return (



        <Card className='mb-3 mx-auto ' style={{ width: '24rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        details.length > 150 ?
                            <span>
                                {details.slice(0, 150) + '...'}
                            </span>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
                <div className='text-center'>
                    <Button variant="dark"><Link className='text-decoration-none text-light' to={`/courses/${id}`}>View Details</Link></Button>
                </div>
            </Card.Body>
        </Card>



    );
};

export default CourseCard;