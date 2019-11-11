import React, {useEffect, useState} from 'react';
import axios from 'axios';
import useToggle from '../hooks/useToggle';
import { 
  Typography, InputLabel, 
  makeStyles, Select, 
  Button, 
  FormControl, 
  MenuItem 
} from '@material-ui/core'; 

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const MoodToggle = ()=> {
  const classes = useStyles();
  const [homeMessage, SetHomeMessage] = useState('');
  const [happy, toggleHappy] = useToggle(true);
  const [number, setNumber] = useState(1)
  const handleChange = (event)=> {
    setNumber(event.target.value);
  }
  useEffect(()=> {
      const fetchData = async ()=>  {
      const response = await axios.get(`/home`);
      SetHomeMessage(response.data.message);
      console.log (response);
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="position">Position</InputLabel>
        <Select
          value={number}
          onChange={handleChange}
          inputProps={{
            name: 'position',
            id: 'postion',
          }}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
        </Select>
      </FormControl>
        <Typography variant='h3' component ='h3'>
         Fileseat
        </Typography> 
        <Typography variant='h5' component='h5'>
          {homeMessage}
        </Typography>
        <Typography variant='h5' component='h5'>
          {happy? "Happy" : "Not Happy"} 
        </Typography>
        <Button variant='contained' color= 'primary' onClick={toggleHappy}>Change mood</Button>
        <Button variant="contained" color="primary" className={classes.button} >
          Click Me!
        </Button>
      </div>
    </div>
  );
}

export default MoodToggle;