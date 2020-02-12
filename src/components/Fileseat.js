import React from 'react';
import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import BackgroundImage from '../assets/images/bg.png';
import {Navbar} from './Navbar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Dropzone from 'react-dropzone';

const LoginStyles = {background : { 
  backgroundImage: "url(" + BackgroundImage + ")", 
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat",
}}

const Fileseat = ()=> {
    const handleSubmit = (values)=> {
      console.log(values)
      axios.post('http://localhost:3001/api/v1/file/new', values, {
        headers: {"Accept": "multipart/form-data"}
      })
      .then (response=> console.log(response))
    }  

    return ( 
      <div className='m-0 p-16' style={LoginStyles.background}>
        <Navbar/>
        <div className='min-w-sm sm:mx-2 container w-1/4'>s
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              receipientEmail: '', message: '',
              senderEmail: '', files: []
            }}
          >
            {
              (
                {
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting, setFieldValue
                }
              ) => (
                  <Form className='rounded-larger bg-white shadow-lg rounded px-10 pt-6 pb-8 my-8' onSubmit={handleSubmit} >
                    <div>
                      <h3 className='text-center text-xl font-bold tracking-normal'>TRANSFER FILES</h3>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='receipientEmail' className='block text-gray-700 text-sm font-bold mb-2 mt-8'>Send files to this email:</label>
                      <Field type='email' className='bg-indigo-100 focus:bg-white shadow-sm appearance-none border-b-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500 ' name='receipientEmail' id='receipientEmail' />
                    </div>
                    <div className='mb-2'>
                      <label htmlFor='senderEmail' className='block text-gray-700 text-sm font-bold mb-2'>Your email:</label>
                      <Field type='email' className='bg-indigo-100 focus:bg-white shadow-sm appearance-none border-b-2 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-blue-500 ' name='senderEmail' id='senderEmail' />
                    </div>
                    <div className='mb-6'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>Message:</label>
                      <Field name='message' className='bg-indigo-100 focus:bg-white shadow-sm appearance-none border-b-2 border-blue-500  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' row='7' id='message' component='textarea' />
                    </div>
                    <Dropzone onDrop = {droppedFiles=> console.log(droppedFiles)} maxSize='125000000'>
                      {
                        ({getRootProps, getInputProps})=> 
                          <div className='border-dashed border-gray-600 border-2 h-24 mb-4' {...getRootProps()}>
                            <div className='mx-32 my-8 text-indigo-700' >
                              <input {...getInputProps()}/>
                              <CloudUploadIcon color='inherit' fontSize='large' />
                            </div>
                          </div>
                        
                      }
                    </Dropzone>

                    <button type='submit' onClick={handleSubmit} className='hover:bg-indigo-500 rounded-full shadow-lg w-full bg-indigo-700 rounded-lg text-white font-bold p-2'>Transfer</button>
                  </Form>
                )
            }
          </Formik>
        </div>
      </div>
    )
}

export default Fileseat;