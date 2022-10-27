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
        fetch('https://let-the-music-play-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div >



            <div className='mt-5 '>
                <ButtonGroup size="sm" className="mb-2">
                    <Button variant='dark' onClick={handleGoogleSignIn} className='me-2'><FaGoogle></FaGoogle>  Login with Google</Button>
                    <Button variant='dark' onClick={handleGithubSignIn}><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>

            <h2 className='mt-4'>Our Total Course : {categories.length}</h2>
            <div className='mt-5 mb-5 '>
                {
                    categories.map(category => <p key={category.id}>
                        <Button className='w-100 mb-3' variant='dark'><Link className='text-decoration-none text-light' to={`/category/${category.id}`}>{category.name}</Link></Button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav; 