import React from "react";
import { AuthContext } from "./Home";
import { useHistory, Link } from 'react-router-dom';

export const UserDashboard = () => {
  const { dispatch } = React.useContext(AuthContext);
  let history = useHistory();

  return (
    <div className="m-0 bg-gray-200 p-20">
      <div className="text-bold">
        Hey I am a protected Route
      <div>Users can use me to</div>
        <button
          className="bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none  text-white p-2"
          onClick={() => {
            dispatch({ type: 'LOGOUT' })
            history.push("/");
          }} >
          Logout X
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
      </div>
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
