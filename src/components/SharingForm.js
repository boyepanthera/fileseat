import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import '../assets/css/SharingForm.css';
import {CloudUpload} from '@material-ui/icons';
import Dropzone from 'react-dropzone';
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
      axios.post('http://localhost:3001/api/v1/file/new', values, {
        headers: {"Accept": "multipart/form-data"}
      })
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
                    <Typography variat='h2' className='text-center form-header' component='h2'>TRANSFER FILES</Typography>
                    <div className='form-group'>
                      <label htmlFor='receipientEmail' className='labels'>Send files to this email:</label>
                      <Field type='email' className='Form-Input' name='receipientEmail' id='receipientEmail'/>
                    </div>
                    <div  className='form-group'>
                      <label htmlFor='senderEmail'>Your email:</label>
                      <Field type='email' className='Form-Input' name='senderEmail' id='senderEmail' />
                    </div>
                    <div  className='form-group'>
                      <label htmlFor='message'>Message:</label>
                      <Field name='message' className='Message-Input form-control' row='5' id='message' component='textarea'/>
                    </div>
                    <div className='form-group '>
                        <label className='Upload-Div' htmlFor='file'> 
                          <input type='file' style={{display:'none'}} id='file' name='file' onChange={(event) => {
                              setFieldValue('file', event.currentTarget.files[0])
                            }} multiple />
                          <div className='text-center'><CloudUpload >
                          </CloudUpload><p>Drag and drop here or browse files</p></div>
                        </label>
                    </div>
                    <button type='submit' onClick={handleSubmit} className='Transfer-Button col'>Transfer</button>
                  </Form>
                )
              }
            </Formik>
    )
}


export default SharingForm;