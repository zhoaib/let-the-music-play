import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>{courses.name}</h2>
        </div>
    );
};

export default Courses;