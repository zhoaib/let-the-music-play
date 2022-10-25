import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';
import CourseCarousel from '../../Shared/CourseCarousel/CourseCarousel';
import './Home.css'

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>


            <div className='card-container'>
                {
                    allCourses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>




            <div className='w-25'>
                <CourseCarousel></CourseCarousel>
            </div>
        </div>
    );
};

export default Home;