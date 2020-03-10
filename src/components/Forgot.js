import React, {useState, useEffect} from 'react';
import { Form, Field, Formik } from 'formik';
import axios from 'axios';
import {useParams} from 'react-router-dom';


export const Forgot = () => {
    let [err, setErr] = useState(null);
    let [success, setSuccess] = useState(null);
    const handleSubmit = async (values)=> {
        try{
            let response = await axios.post('http://localhost:3005/api/v1/users/resetpassword', values, {headers:{Accept: "application/json"}})
            console.log(response);
            setSuccess(response.data.message);
            setTimeout(()=> setSuccess(null), 4000);
        } catch (err) {
            if(err.response) {
                setErr(err.response.data.message);
                setTimeout(()=> setErr(null), 4000);
            } else {
                setErr('Unable to connect to reset password server');
                setTimeout(()=> setErr(null), 4000)
            }
        }
    }
    return (
        <div className='bg-gray-200 flex flex-wrap h-screen'>

            <div className='m-auto w-1/4'>
                            {
                err ? <div className='text-sm bg-red-100 rounded rounded-sm py-1 text-center text-red-500 border-red-300'>{err}</div> : null
            }
            {
                success ? <div className='text-sm bg-blue-100 rounded rounded-sm py-1 text-center text-blue-500 border-blue-300'>{success}</div> : null
            }
                <Formik
                    initialValues={{
                        email: ''
                    }}
                    onSubmit ={handleSubmit}
                >
                    {
                        () =>
                            <Form className='w-full bg-white mx-auto p-8 my-8 rounded-lg'>
                                <div>
                                    <label className='block text-black font-bold uppercase text-sm'>Email</label>
                                    <Field className='w-full rounded rounded-sm p-2 my-2 border border-gray-400' type='text' name='email' placeholder='e.g johnjude@gm.com' />
                                </div>
                                <button type='submit' className='bg-purple-700 my-4 hover:bg-purple-500 w-full font-bold text-white rounded rounded-lg py-2'>Reset Password <i className="fas text-2xl  text-white fa-street-view"></i></button>
                            </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}

export const Reset = () => {
    let [err, setErr] = useState(null);
    let [success, setSuccess] = useState(null);
    let [email, setEmail] = useState(null);
    let {id} = useParams();
    const handleSubmit = async (values)=> {
        try{
            let response = await axios.post('http://localhost:3005/api/v1/users/resetpassword', values, {headers:{Accept: "application/json"}})
            console.log(response);
            setSuccess(response.data.message);
        } catch (err) {
            if(err.response) {
                setErr(err.response.data.message);
                setTimeout(()=> setErr(null), 4000);
            } else {
                setErr('Unable to connect to reset password server');
                setTimeout(()=> setErr(null), 4000)
            }
        }
    }

    useEffect(
        ()=> async ()=> {
            try {
                let response = await axios.get(`http://localhost:3005/api/v1/users/resetpassword/${id}`);
                console.log(response);
                setEmail(response.data.email);
                setSuccess(response.data.message);
            } catch (err) {
                if(err.response){
                    setErr(err.response.data.message);
                    setTimeout(()=> setErr(null), 4000)
                } else {
                    setErr('There were issues connecting with backend server!')
                }
            }
        }, [id]
    )

    return (
        <div className='bg-gray-200 flex flex-wrap h-screen'>

            <div className='m-auto w-1/4'>
                            {
                err ? <div className='text-sm bg-red-100 rounded rounded-sm py-1 text-center text-red-500 border-red-300'>{err}</div> : null
            }
            {
                success ? <div className='text-sm bg-blue-100 rounded rounded-sm py-1 text-center text-blue-500 border-blue-300'>{success}</div> : null
            }
                <Formik
                    initialValues={{
                        email: {email}
                    }}
                    onSubmit ={handleSubmit}
                >
                    {
                        () =>
                            <Form className='w-full bg-white mx-auto p-8 my-8 rounded-lg'>
                                <div className='my-2'>
                                    <label className='block text-black font-bold uppercase text-sm'>Email</label>
                                    <Field className='w-full rounded rounded-sm p-2 my-2 border border-gray-400' type='text' value={email} name='email' placeholder='e.g johnjude@gm.com' />
                                </div>
                                <div className='my-2'>
                                    <label className='block text-black font-bold uppercase text-sm'>New Password</label>
                                    <Field className='w-full rounded rounded-sm p-2 my-2 border border-gray-400' type='text' name='email' placeholder='e.g. **********' />
                                </div>
                                <div>
                                    <label className='block text-black font-bold uppercase text-sm'>Confirm New Password</label>
                                    <Field className='w-full rounded rounded-sm p-2 my-2 border border-gray-400' type='text' name='email' placeholder='e.g. **********' />
                                </div>
                                <button type='submit' className='bg-purple-700 my-4 hover:bg-purple-500 w-full font-bold text-white rounded rounded-lg py-2'>Set New Password <i className="fas text-2xl  text-white fa-street-view"></i></button>
                            </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}