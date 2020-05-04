import React, { useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./Home";
import { useHistory, Link, Redirect } from "react-router-dom";
import axios from "axios";
import ChatSharpIcon from "@material-ui/icons/ChatSharp";

const initialState = {
  user: null,
  isFetching: false,
  err: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER_DETAILS":
      return {
        ...state,
        isFetching: true,
        err: false
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        err: false
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        user: null,
        err: true
      };
    default:
      return state;
  }
};

export const UserDashboard = () => {
  const { dispatch } = useContext(AuthContext);
  // console.log(dispatch);
  const token = JSON.parse(localStorage.getItem("token"));
  let history = useHistory();
  const [state, stateDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    stateDispatch({ type: "FETCH_USER_DETAILS" });
    axios
      .get(`https://api.fileseat.com/api/v1/users/userdash`, {
      // .get(`http://localhost:3005/api/v1/users/userdash`, {
        headers: { Authorization: token }
      })
      .then(response => {
        console.log(response.data);
        stateDispatch({
          type: "FETCH_USER_SUCCESS",
          payload: response.data.user
        });
      })
      .catch(err => {
        console.log(err);
        stateDispatch({ type: "FETCH_USER_FAILURE" });
      });
  }, [token]);
  // console.log(state);
  return (
    <>
      {state.err ? (
        <Redirect to="/auth" />
      ) : (
        <div className="h-screen bg-gray-100 inset-0">
          <div className="inset-0 h-20 bg-white px-8 py-5 flex">
            <div className="w-full sm:w-1/4">
              <Link className="text-indigo-700 text-2xl font-extra-bold" to="/">
                FS
              </Link>
            </div>
            <div className="w-full flex sm:w-3/4">
              <div className="mx-auto w-1/2  flex relative">
                <div className="-mx-2 py-2">
                  <i className="inline text-gray-600 fas fa-search absolute"></i>
                </div>
                <input
                  type="search"
                  className="border-gray-200 px-8 placeholder-gray-800 placeholder-opacity-50 shadow-2xl rounded-sm h-8 border border-gray-600 w-full"
                  placeholder="Search ..."
                  name="search"
                />
              </div>
              <div>
                <span>Hello! {state.user ? state.user.fullName : null}</span>
                <i className="far fa-bell text-indigo-700 mx-8"></i>
                <button
                  className="bg-indigo-700 text-sm rounded-lg hover:bg-indigo-800 focus:outline-none  text-white p-2"
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    history.push("/");
                  }}
                >
                  <span>Logout </span> <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-wrap">
            <div className="w-full sm:w-1/5 bg-gray-200 px-8 pt-32">
              <div className="my-8 flex hover:text-indigo-700">
                <i className="w-1/4 fas fa-home"></i>
                <Link className="w-3/4 font-black hover:text-indigo-700 text-gray-600">
                  Home
                </Link>
              </div>
              <div className="my-8 flex hover:text-indigo-700">
                <i className="fas w-1/4 fa-file-medical-alt"></i>
                <Link className="w-3/4 font-black hover:text-indigo-700 text-gray-600">
                  History
                </Link>
              </div>
              <div className="my-8 flex hover:text-indigo-700">
                <i className="w-1/4 far fa-share-square"></i>
                <Link className="w-3/4 font-black hover:text-indigo-700 text-gray-600">
                  Share Files
                </Link>
              </div>
              <hr />
              <div className="my-8 flex hover:text-indigo-700">
                <i className="w-1/4 fas fa-sliders-h"></i>
                <Link className="w-3/4 font-semibold text-gray-600 hover:text-indigo-700">
                  Settings
                </Link>
              </div>
              <div className="my-8 flex hover:text-indigo-700">
                <div className="w-1/4">
                  <ChatSharpIcon />
                </div>
                <Link className="w-3/4 font-semibold text-gray-600 hover:text-indigo-700">
                  Feedbacks
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-4/5 bg-gray-400 p-10">
              <div>Users can use me to</div>
              <ul>
                <li>Know the number of files they have shared all time!</li>
                <li>{state.user ? state.user.email : null}</li>
                <li>
                  Know the dates they uploaded and the date of
                  deletion/expiration
                </li>
                <li>List of file deprecated</li>
                <li>List of file Active</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
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
            dispatch({ type: "LOGOUT" });
            history.push("/");
          }}
        >
          <span>Logout </span> <i className="fas fa-sign-out-alt"></i>
        </button>
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
};
