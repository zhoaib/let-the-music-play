import React from 'react';
import CourseCarousel from '../../Shared/CourseCarousel/CourseCarousel';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <div className='w-25'>
                <CourseCarousel></CourseCarousel>
            </div>
        </div>
    );
};

export default Home;