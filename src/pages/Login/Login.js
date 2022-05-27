import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {toast} from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import SocialButtons from './SocialButtons';

const style = {
    padding: '60px 0',
    backgroundImage: `url()`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const Login = () => {
    const [emailClicked, setEmailClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get email and password
    const emailOnBlur = e => {
        setEmailClicked(false);
        setEmail(e.target.value);
    }
    const passwordOnBlur = e => {
        setPassClicked(false);
        setPassword(e.target.value);
    }

    // use react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    // react built-in hooks
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    useEffect( () => {
        if (user) {
            navigate(from, {replace: true});
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault();
        
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='register-box bg-secondary'>
                <h2 className='text-center text-white text-3xl mb-4'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-box border-normal">
                        <div className='w-full relative'>
                            <label className={`${emailClicked || email ? 'clicked' : 'noclicked'}`} htmlFor="email">Your Email*</label>
                            <input onClick={() => setEmailClicked(true)} onBlur={emailOnBlur} type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="input-box border-normal mb-1">
                        <div className='w-full relative'>
                            <label className={`${passClicked || password ? 'clicked' : 'noclicked'}`} htmlFor="password">Your Password*</label>
                            <input onClick={() => setPassClicked(true)} onBlur={passwordOnBlur} type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <span className='mr-2 text-white'>Forgot your password?</span>
                        <span onClick={ async () => {
                            await sendPasswordResetEmail(email)
                            toast.success('An email sent to you, please check!')
                        }} className='signinup-link text-teal-200 hover:border-b-2 border-teal-200'>Please reset</span>
                    </div>
                    {errorElement}
                    <div>
                        <input className='input-submit w-full bg-accent py-3 mt-1' type="submit" value="Login Your Account" />
                    </div>
                </form>
                <div className='text-center text-white my-3'>
                    <span className='text-xl font-bold'>or</span>
                </div>
                <SocialButtons></SocialButtons>
                <div>
                    <span className='mr-2 text-white'>Don't have an account?</span>
                    <Link className='signinup-link text-teal-200 hover:border-b-2 border-teal-200' to='/register'>Please Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;