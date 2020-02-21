import React, { useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./Home";
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";
import { PageLoader } from '../utils/index';

const initialState = {
  user: null,
  isFetching: false,
  err: false
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
        user: action.payload.user
      }
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        isFetching: true,
        user: null
      }
    default:
      return state;
  }
}

export const UserDashboard = () => {
  const { dispatchAuth } = useContext(AuthContext);
  let history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_DETAILS' });
    axios.get(`http://localhost:3005/api/v1/users/`)
      .then(response => {
        dispatch({
          type: "FETCH_USER_SUCCESS",
          payload: response.data.user
        });
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: 'FETCH_USER_FAILURE' })
      })
  }, [dispatchAuth.token])
  return (
    <div className="m-0 bg-gray-200 p-20">
      {state.isFetching ? <PageLoader /> :
        (
          <>
            <div>Users can use me to</div>
            <button
              className="bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none  text-white p-2"
              onClick={() => {
                dispatchAuth({ type: 'LOGOUT' });
                history.push("/");
              }} >
              <span>Logout </span> <i className='fas fa-sign-out-alt'></i>
            </button>
            <Link className='text-white' to='/admin'>Admin</Link>

            <ul>
              <li>Know the number of files they have shared all time!</li>
              <li>
                Know the dates they uploaded and the date of deletion/expiration
              </li>
              <li>List of file deprecated</li>
              <li>List of file Active</li>
            </ul>
          </>
        )
      }

    </div>
  )
};

export const AdminDashboard = () => (
  <div className="m-0 h-full bg-gray-200">
    <div>
      <div className="text-bold">Hey I am a protected Route for Admin</div>
      <div>Admin can use me to</div>
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
);
