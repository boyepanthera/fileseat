import React, { useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./Home";
import { useHistory, Link, Redirect } from 'react-router-dom';
import axios from "axios";

const initialState = {
  user: null,
  isFetching: false,
  err: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_DETAILS':
      return {
        ...state,
        isFetching: true,
        err: false
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        err: false,
      }
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        user: null,
        err: true
      }
    default:
      return state;
  }
}

export const UserDashboard = () => {
  const { dispatch } = useContext(AuthContext);
  // console.log(dispatch);
  const token = JSON.parse(localStorage.getItem('token'));
  let history = useHistory();
  const [state, stateDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    stateDispatch({ type: 'FETCH_USER_DETAILS' });
    axios.get(`http://localhost:3005/api/v1/users/userdash`, { headers: { Authorization: token } })
      .then(response => {
        stateDispatch({
          type: "FETCH_USER_SUCCESS",
          payload: response.data.user
        });
      })
      .catch(err => {
        console.log(err)
        stateDispatch({ type: 'FETCH_USER_FAILURE' })
      })
  }, [token])
  console.log(state);
  return (
    <>
      {state.err ? <Redirect to='/auth' /> :
        (

          <div className="m-0 bg-gray-200 p-20">

            <div>Users can use me to</div>
            <button
              className="bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none  text-white p-2"
              onClick={() => {
                dispatch({ type: 'LOGOUT' });
                history.push("/");
              }} >
              <span>Logout </span> <i className='fas fa-sign-out-alt'></i>
            </button>
            <Link className='text-white' to='/admin'>Admin</Link>
            <ul>
              <li>Know the number of files they have shared all time!</li>
              <li>{state.user ? state.user.email : null}</li>
              <li>
                Know the dates they uploaded and the date of deletion/expiration
              </li>
              <li>List of file deprecated</li>
              <li>List of file Active</li>
            </ul>
          </div>


        )
      }
    </>
  )
};

export const AdminDashboard = () => {
  const { dispatch } = useContext(AuthContext);
  let history = useHistory();
  return (
    <div className="m-0 h-full bg-gray-200">
      <div>
        <div className="text-bold">Hey I am a protected Route for Admin</div>
        <div>Admin can use me to</div>
        <button
          className="bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none  text-white p-2"
          onClick={() => {
            dispatch({ type: 'LOGOUT' });
            history.push("/");
          }}
        ><span>Logout </span> <i className='fas fa-sign-out-alt'></i></button>
        <ul>
          <li>Know the number Senders all time</li>
          <li>List of Registered Senders</li>
          <li>List of Anonymous Senders</li>
          <li>List of Registered Receipientss</li>
          <li>List of Anonymous Receipientss</li>
          <li>List of all files sent all time</li>
          <li>List of files based on category Deprecated/Active</li>
        </ul>
      </div>
    </div>
  )
};
