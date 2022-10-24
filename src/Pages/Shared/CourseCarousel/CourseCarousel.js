import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import a from '../../../images/a.jpg'
import b from '../../../images/b.jpg'
import c from '../../../images/c.jpg'
import d from '../../../images/d.jpg'
import e from '../../../images/e.jpg'
import f from '../../../images/f.jpg'

const CourseCarousel = () => {
    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={a}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c}
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={d}
                    alt="Forth slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e}
                    alt="Forth slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={f}
                    alt="Forth slide"
                />
            </Carousel.Item>


        </Carousel>
    );
};

export default CourseCarousel;