import React from 'react';
import  Image  from 'next/image';
import { signIn } from 'next-auth/client';

const Login = () => {
    return (
        <div className="grid place-items-center">
            <Image  src='https://www.pngarts.com/files/10/Facebook-Logo-PNG-Image-Background.png'
                width={350} height={350} objectFit='contain' />
                <h1 onClick={signIn} className='p-5 mt-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    );
};

export default Login;