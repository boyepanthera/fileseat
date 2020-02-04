import React from 'react';
import Navbar from './Navbar';
import {Formik, Form, Field} from 'formik';
import LoginPicture from '../assets/images/ThreeHappyFriends.jpg';
import styled from 'styled-components';

const ErrMessage = styled.div`
    color:  red
`

const Login = ()=> {
    return (

        <div className='h-full'>
            <div className='w-1/2'>
                <Formik
                initialValues = 
                {{email : '' , password : ''}}
                
                >
                {props => (
                    <Form className='w-full max-w-sm rounded-full'>
                        <h1>Welcome Back</h1>
                        <div>Login to your account</div>
                        <div className='mb-4'>
                            <label htmlFor='email'>Email</label>
                            <Field name='email' className='border-b-2 border-indigo-700 w-full' type='email' />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='password'>Password</label>
                            <Field name='password' className='border-b-2 border-indigo-700 w-full' type='password' />
                        </div>
                        <button type='submit rounded-full w-full hover:bg-indigo-700'>Login</button>
                    </Form>
                )}
                </Formik>
            </div>
            <div className='w-1/2'>
                <Navbar/>
                <image src={LoginPicture} alt='Three happy friends in the snow'/>
            </div>

        </div>
    )
}


export default Login