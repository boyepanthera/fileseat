import styled from "styled-components";
import React from 'react';

export const ErrMessage = styled.div`
  color: red;
`;

export const Spinner = () => <span>Signing In... <i className='fas fa-spinner fa-pulse'></i></span>

export const Uploading = (props) =>
  <div className='mx-auto items-center my-8'>
    <div className='text-3xl text-center font-bold '>FILESEAT</div>
    <div className="rounded-full my-8 mx-auto h-64 w-64 flex items-center justify-center border-4 border-indigo-700 bg-white ">
      <span className='p-4 my-4  text-4xl text-purple-800'>{props.progress}%</span>
    </div>
    <div className='items-center flex justify-center'>Sending <span className='mx-2'>{props.fileName}</span></div>
    <div className='items-center flex justify-center'>to {props.receipient}</div>
    <button className='rounded-full w-full bg-purple-700 focus:bg-purple-600 focus:outline-none p-2 my-4 mx-auto text-white font-semibold'>Cancel...</button>
  </div>
