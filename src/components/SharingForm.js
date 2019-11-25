import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import '../assets/css/SharingForm.css';
import {CloudUpload} from '@material-ui/icons';
import { 
  Typography, InputLabel, 
  makeStyles, Select, 
  Button, 
  FormControl, 
  MenuItem , Grid
} from '@material-ui/core'; 

const SharingForm = ()=> {
    const handleSubmit = (values)=> {
      console.log(values)
      axios.post('http://localhost:3001/api/v1/file/new', values)
      .then (response=> console.log(response))
    }  

    return ( 
            <Formik 
            onSubmit={handleSubmit}
            initialValues = {{
              receipientEmail : '', message: '',
              senderEmail : '', file: ''
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
                )=> (
                  <Form className='SharingForm' onSubmit={handleSubmit} >
                    <Typography variat='h4' className='text-center form-header' component='h4'>TRANSFER FILES</Typography>
                    <div className='form-group'>
                      <label htmlFor='receipientEmail' className='labels'>Send files to this email:</label>
                      <Field type='email' className='form-control' name='receipientEmail' id='receipientEmail'/>
                    </div>
                    <div  className='form-group'>
                      <label htmlFor='senderEmail'>Your email:</label>
                      <Field type='email' className='form-control' name='senderEmail' id='senderEmail' />
                    </div>
                    <div  className='form-group'>
                      <label htmlFor='message'>Message:</label>
                      <Field name='message' className='form-control Form-Input' id='message' component='textarea'/>
                      
                    </div>
                  
                      {/* <CloudUpload  className='Upload-Div' containerElement= 'label' label='Drag files here'> */}
                        <input type='file' name='file' onChange={(event) => {
                              setFieldValue('file', event.currentTarget.files[0])
                            }}/>
                      {/* </CloudUpload> */}
                      <button type='submit' onClick={handleSubmit} className=' Transfer-Button btn btn-primary col' id = ''>Transfer</button>
                  </Form>
                )
              }
            </Formik>
    )
}


export default SharingForm;