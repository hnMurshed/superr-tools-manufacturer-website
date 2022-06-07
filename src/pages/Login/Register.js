import React, { useEffect, useState } from 'react';
import './Register.css';
import SocialButtons from './SocialButtons';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [nameClicked, setNameClicked] = useState(false);
    const [emailClicked, setEmailClicked] = useState(false);
    const [passClicked, setPassClicked] = useState(false);
    const [confPassClicked, setConfPassClicked] = useState(false);
    const [activeCheck, setActiveCheck] = useState(false);
    const [passMatched, setPassMatched] = useState(true);

    // get input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const nameOnBlur = e => {
        setNameClicked(false)
        setName(e.target.value);
    };
    const emailOnBlur = e => {
        setEmailClicked(false)
        setEmail(e.target.value);
    };
    const passwordOnBlur = e => {
        setPassClicked(false)
        setPassword(e.target.value);
    };
    const confPasswordOnBlur = e => {
        setConfPassClicked(false)
        setConfPassword(e.target.value);
    };

    // use react built-in hooks
    const navigate = useNavigate();

    // use react firebase hooks
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification });

    const [
        updateProfile,
        updating,
        updatingError
    ] = useUpdateProfile(auth);

    // use costom hooks
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);


    let errorElement;
    if (error || updatingError) {
        errorElement = <p className='text-orange-400 font-bold text-xl'>{error?.message || updatingError?.message}</p>
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async e => {
        e.preventDefault();

        if (password !== confPassword) {
            setPassMatched(false);
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
    }
    return (
        <div className='flex items-center justify-center my-8'>
            <div className='register-box bg-primary'>
                <h2 className='text-center text-white text-3xl mb-4'>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-box input-normal">
                        <div className='w-full relative'>
                            <label className={`${nameClicked || name ? 'clicked' : 'noclicked'}`} htmlFor="name">Name*</label>
                            <input onClick={() => setNameClicked(true)} onBlur={nameOnBlur} type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div className="input-box input-normal">
                        <div className='w-full relative'>
                            <label className={`${emailClicked || email ? 'clicked' : 'noclicked'}`} htmlFor="email">Your Email*</label>
                            <input onClick={() => setEmailClicked(true)} onBlur={emailOnBlur} type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className={`input-box ${passMatched ? 'input-normal' : 'input-error'}`}>
                        <div className='w-full relative'>
                            <label className={`${passClicked || password ? 'clicked' : 'noclicked'}`} htmlFor="password">New Password*</label>
                            <input onClick={() => setPassClicked(true)} onBlur={passwordOnBlur} type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div className={`input-box ${passMatched ? 'input-normal' : 'input-error'}`}>
                        <div className='w-full relative'>
                            <label className={`${confPassClicked || confPassword ? 'clicked' : 'noclicked'}`} htmlFor="confPassword">Confirm Password*</label>
                            <input onClick={() => setConfPassClicked(true)} onBlur={confPasswordOnBlur} type="password" name="confPassword" id="confPassword" />
                        </div>
                    </div>
                    <p className={` text-orange-400 font-bold -mt-7 mb-7 text-xl ${passMatched ? 'hidden' : 'block'}`}>Password didn't match</p>
                    <div>
                        <input onClick={() => setActiveCheck(!activeCheck)} className='mr-2' type="checkbox" name="checkbox" id="checkbox" required />
                        <label htmlFor="checkbox" className=' text-white'>I agree to <strong className=' text-teal-200 hover:border-b-2 border-teal-200'>Terms & Conditions</strong> and <strong className=' text-teal-200 hover:border-b-2 border-teal-200'>Privacy Policy</strong></label>
                    </div>
                    <div>
                        <input className='input-submit w-full bg-secondary py-3' type="submit" value="Create Your Account" />
                    </div>
                    {errorElement}
                </form>
                <div className='text-center text-white my-3'>
                    <span className='text-xl font-bold'>or</span>
                </div>
                <SocialButtons></SocialButtons>
                <div>
                    <span className='mr-2 text-white'>Already have an account?</span>
                    <Link className='signinup-link text-teal-200 hover:border-b-2 border-teal-200' to='/login'>Please Signin</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;