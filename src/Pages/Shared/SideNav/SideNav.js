import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const SideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div>
                <ButtonGroup size="sm" className="mb-2">
                    <Button onClick={handleGoogleSignIn} className='me-2'><FaGoogle></FaGoogle>  Login with Google</Button>
                    <Button onClick={handleGithubSignIn}><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
            <h2>Course Category: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav; 