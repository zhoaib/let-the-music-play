import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../../Courses/Courses/Courses';
import CourseCard from '../../Shared/CourseCard/CourseCard';


const Category = () => {
    const coursesCategory = useLoaderData();


    return (
        <div>
            <h2>This is Category has courses:{coursesCategory.length}</h2>

            {
                coursesCategory.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Category;