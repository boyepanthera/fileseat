import styled from "styled-components";
import React from 'react';

export const ErrMessage = styled.div`
  color: red;
`;

export const Spinner = () => <span>Signing In... <i className='fas fa-spinner fa-pulse'></i></span>

export const PageLoader = () =>
  <div>
    <div className='text-purple-800 text-4xl'> Loading... </div>
    <i className='fas fa-spinner fa-pulse text-2xl'></i>
  </div>
