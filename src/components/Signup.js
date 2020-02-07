import React from 'react';
import SignupMan from '../assets/images/one-happy-man.jpg';
import {Formik, Form, Field} from 'formik';
import {RightNavbar, LeftNavbarWhite} from './Navbar';
import {Link} from 'react-router-dom';

const SignupStyles = {
    background : {
        backgroundImage: "url(" + SignupMan + ")", 
    }
}


export const Signup = () => (
        <div className = 'h-full flex'>
            <div className='bg-cover m-0 w-1/2' style={SignupStyles.background}>
                <div className='m-10'>
                    <LeftNavbarWhite />
                </div>
            </div>
            <div className ='w-1/2 bg-gray-200'>
                <RightNavbar/>
                <Formik
                onSubmit = {(values)=> console.log(values) }
                initialValues = {{
                    fullName: '', 
                    email: '', 
                    password: '', 
                    confirmPassword: ''}}
                >
                    {
                        ()=> (
                            <Form className='max-w-sm w-full bg-white rounded-larger mx-auto my-32 p-8'>
                                <div className='text-center font-bold'>Let's get started</div>
                                <div className='text-center mb-8'>Create a FS account to get all features</div>
                                <div className = 'mb-4'>
                                    <label className='font-semibold'>Full name</label>
                                    <Field name='fullName' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full'/>
                                </div>
                                <div className = 'mb-4'>
                                    <label className='font-semibold'>Email</label>
                                    <Field name='email' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full'/>
                                </div>
                                <div className = 'mb-4'>
                                    <label className='font-semibold'>Password</label>
                                    <Field name='password' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full'/>
                                </div>
                                <div className = 'mb-6'>
                                    <label className='font-semibold'>Confirm Password</label>
                                    <Field name='confirmPassword' className='h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full'/>
                                </div>
                                <button className='rounded-full w-full bg-purple-600 h-10 text-white font-normal' type='button'>Create account</button>
                                <div className='text-center my-4 mx-auto text-sm'>Already have an account? Log in <Link className='text-purple-600 font-bold' to='/auth'>here</Link></div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
    )

    