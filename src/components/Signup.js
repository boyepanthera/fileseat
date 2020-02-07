import React from 'react';
import SignupMan from '../assets/images/one-happy-man.jpg';
import {Formik, Form, Field} from 'formik';

const SignupStyles = {
    background : {
        backgroundImage: "url(" + SignupMan + ")", 
    }
}


export const Signup = () => (
        <div className = 'h-full flex'>
            <div className='bg-cover m-0' style={SignupStyles.background}>
                
            </div>

            <div className ='w-1/2 bg-gray-200'>
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
                            <Form>
                                <div>Let's get started</div>
                                <div>Create a FS account to get all features</div>
                                <div>
                                    <label>Full name</label>
                                    <Field name='fullName' className='border-bt-2 border-purple-100 w-full'/>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <Field name='email' className='border-bt-2 border-purple-100 w-full'/>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <Field name='password' className='border-bt-2 border-purple-100 w-full'/>
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <Field name='confirmPassword' className='border-bt-2 border-purple-100 w-full'/>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
    )

    