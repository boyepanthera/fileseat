import React from 'react';
import {Formik, Form, Field} from 'formik';
import LoginPicture from '../assets/images/ThreeHappyFriends.jpg';
import styled from 'styled-components';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const ErrMessage = styled.div`
    color:  red
`
const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('This is not a valid email'),
    password: Yup.string()
    .min(8, 'Your password cannot be fewer than 8 characters')
})

const Login = ()=> {
    return (
        <div className='h-full'>
            <Navbar/>
            <div className='w-1/2 m-0 p-20 bg-gray-300'>
                <Formik
                initialValues = 
                {{email : '' , password : ''}}
                validationSchema={LoginSchema}
                onSubmit={values=> console.log(values)}
                >
                {props => (
                    <Form className='w-full max-w-sm rounded-lg bg-white px-12 py-8 my-20 shadow-lg'>
                        <h1 className='text-center text-2xl font-extrabold mb-4'>Welcome Back</h1>
                        <div className='text-center font-bold'>Login to your account</div>
                        <div className='mb-4 mt-12'>
                                <label className='font-black' htmlFor='email'>Email</label>
                            <Field name='email' className='border-b-2 h-10 border-indigo-700 w-full' type='email' />
                            {props.errors.name && props.touched.name ? <ErrMessage/>: null}
                        </div>
                        <div className='mb-8'>
                            <label className='font-black' htmlFor='password'>Password</label>
                            <Field name='password' className='border-b-2 h-10 border-indigo-700 w-full' type='password' />
                            {props.errors.password && props.touched.password ? <ErrMessage /> : null}
                        </div>
                        <button type='submit' className='rounded-full shadow-lg bg-indigo-700 w-full hover:bg-indigo-500 text-white p-2'>Login</button>
                        <div className='m-4 text-center'>Forgot password?</div>
                        <div className='m-6 text-center'>Dont have an account yet? <Link className='text-purple-500' to='/newauth'>Sign Up</Link></div>
                    </Form>
                )}
                </Formik>
            </div>
            <div className='w-1/2'>
                <image src={LoginPicture} alt='Three happy friends in the snow'/>
            </div>
        </div>
    )
}

export default Login