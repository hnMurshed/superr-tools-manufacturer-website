import React from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import {FaGoogle} from 'react-icons/fa';
import Loading from '../shared/Loading/Loading';
import './SocialButtons.css';

const SocialButtons = () => {
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading1 || loading2) {
        return <Loading></Loading>
    }

    let errorMessage = '';
    if (error1 || error2) {
        errorMessage = <p className='text-danger'>{error1?.message || error2?.message}</p>
    }

    if (user1 || user2) {
        return <Navigate to={from} replace={true}></Navigate>
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='social-btn google w-full py-2'>
                <FaGoogle className='mr-2 text-[32px]'></FaGoogle>
                <span>Continue With Google</span>
            </button>
            <button onClick={() => signInWithGithub()} className='social-btn github mt-3 w-full py-2'>
                <svg className='mr-2 octicon octicon-mark-github v-align-middle' height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" fill='black'>
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span>Continue With Github</span>
            </button>
            {errorMessage}
        </div>
    );
};

export default SocialButtons;