import styled from "styled-components";
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import sentImage from '../assets/images/sent.svg'

export const ErrMessage = styled.div`
  color: red;
`;

export const Spinner = () => <span>Signing In... <i className='fas fa-spinner fa-pulse'></i></span>

export const Uploading = (props) => {
  const styles = buildStyles({
    textColor: '#4C51BF',
    textSize: "16px",
    backgroundColor: '#4C51BF',
    pathColor: '#4C51BF',
    trailColor: '#A3BFFA',
  })

  return (
    <div className='mx-auto items-center my-8'>
      <div className='text-3xl text-center font-bold mb-4'>FILESEAT</div>
      <div>
        <CircularProgressbar className='my-4' value={props.progress} text={`${props.progress}%`} styles={styles} />
      </div>
      <div className='items-center flex justify-start font-bold'>Sending:</div>
      <div className='my-2'>{props.fileName}</div>
      <div className='items-center flex justify-start font-bold'>To: </div>
      <div className='my-2'>{props.receipient}</div>
      <button className='rounded-full w-full bg-indigo-700 hover:bg-indigo-500 focus:outline-none p-2 mt-4 mx-auto text-white font-semibold'>Cancel...</button>
    </div>
  )
}

export const Uploaded = () => (
  <div className='mx-auto items-center my-8'>
    <div className='text-3xl text-center font-bold mb-4'>FILESEAT</div>
    <div className='items-center justify-center flex'>
      <img src={sentImage} alt='Sent success jubilation!' />
      <div className='items-center flex justify-center font-bold text-2xl font-bold'>SENT!!!</div>
      <div className='items-center flex justify-center font-bold'>The download email has been sent - your file's seat is available for 7days.</div>
      <button className='bg-indigo-700 w-full p-2 mx-4' disabled>Done!</button>
    </div>
  </div>
)