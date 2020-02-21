import React, { useState } from 'react';
import SignupMan from '../assets/images/one-happy-man.jpg';
import { Formik, Form, Field } from 'formik';
import { RightNavbar, LeftNavbarWhite } from './Navbar';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ErrMessage, Spinner } from '../utils/index';

const SignupStyles = {
    background: {
        backgroundImage: "url(" + SignupMan + ")",
    }
}

export const Signup = () => {
    const [submitting, setSubmitting] = useState(false);
    const handleSignup = (values) => {
        setSubmitting(true);
        axios.post('http://localhost:3005/api/v1/users/register', values, { headers: { "Content-Type": "application/json" } })
            .then(response => console.log(response))
            .then(() => history.push('/login'))
            .catch(err => {
                console.log(err);
                setSubmitting(false);
            })
    }
    const history = useHistory();
    return (
        <div className='h-full flex'>
            <div className='bg-cover m-0 w-1/2' style={SignupStyles.background}>
                <div className='m-10'>
                    <LeftNavbarWhite />
                </div>
            </div>
            <div className='w-1/2 bg-gray-200'>
                <RightNavbar />
                <Formik
                    onSubmit={handleSignup}
                    initialValues={{
                        fullName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                >
                    {
                        (errors, touched) => (
                            <Form className='max-w-sm w-full bg-white rounded-larger mx-auto my-32 p-8'>
                                <div className='text-center font-bold'>Let's get started</div>
                                <div className='text-center mb-8'>Create a FS account to get all features</div>
                                <div className='mb-4'>
                                    <label className='font-semibold'>Full name</label>
                                    <Field name='fullName' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full' />
                                    {errors.name && touched.name ? (
                                        <ErrMessage />
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <label className='font-semibold'>Email</label>
                                    <Field name='email' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full' />
                                    {errors.email && touched.email ? (
                                        <ErrMessage />
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <label className='font-semibold'>Password</label>
                                    <Field name='password' type='password' autoComplete='on' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full' />
                                    {errors.password && touched.password ? (
                                        <ErrMessage />
                                    ) : null}
                                </div>
                                <div className='mb-6'>
                                    <label className='font-semibold'>Confirm Password</label>
                                    <Field name='confirmPassword' type='password' autoComplete='on' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full' />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <ErrMessage />
                                    ) : null}
                                </div>
                                <button className='rounded-full w-full bg-purple-600 h-10 text-white font-normal focus:outline-none' type='submit'>{submitting ? <Spinner /> : 'Create account'}</button>
                                <div className='text-center my-4 mx-auto text-sm'>Already have an account? Log in <Link className='text-purple-600 font-bold' to='/auth'>here</Link></div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
    )
}

