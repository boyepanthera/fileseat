import styled from "styled-components";
import React from 'react';

export const ErrMessage = styled.div`
  color: red;
`;

export const Spinner = () => <span>Signing In... <i className='fas fa-spinner fa-pulse'></i></span>
