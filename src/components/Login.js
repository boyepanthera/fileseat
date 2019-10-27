import React, {useState, useEffect} from 'react';
import {
    Button, Typography, makeStyles, 
    CircularProgress, MenuItem, TextField
} from '@material-ui/core';


const Login = ()=> {
    const [inputs, setInputs] = useState ('');
    return (
        <form>
            <label>Username</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
        </form>
    )
}


export default Login