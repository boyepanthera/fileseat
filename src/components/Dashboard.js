import React, { useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./Home";
import { useHistory, Link, Redirect } from "react-router-dom";
import axios from "axios";
import ChatSharpIcon from "@material-ui/icons/ChatSharp";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";


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
              <Link className="text-indigo-700 text-2xl font-black" to="/">
                FS
              </Link>
            </div>
            <div className="w-full flex sm:w-3/4">
              <div className="mx-auto w-1/2  flex relative">
                <div className="-mx-2 py-2">
                  <i className="inline text-gray-600 fas fa-search absolute text-black"></i>
                </div>
                <input
                  type="search"
                  className="border-gray-200 px-8 placeholder-gray-800 placeholder-opacity-50 shadow-2xl rounded-sm h-8 border border-gray-600 w-full"
                  placeholder="Search ..."
                  name="search"
                />
              </div>
              <div className="flex my-auto">
                <div className="h-10 w-10 rounded-full mx-4 border-gray-500 border bg-gray-500">
                  <img
                    src="https://res.cloudinary.com/legalbox/image/upload/v1588722685/boye_edited-min_hmufhz.jpg"
                    alt="User profile"
                    className="w-full h-full rounded-full hover:opacity-50"
                  />
                </div>
                <div className="flex py-2">
                  <span className="text-indigo-700 font-semibold">
                    {state.user ? state.user.email : null}
                  </span>
                  <i className="far fa-bell pt-1 text-xl text-indigo-700 mx-8"></i>
                </div>
                <div className="flex">
                  <button
                    className="bg-indigo-700 text-sm font-semibold rounded-lg hover:bg-indigo-800 focus:outline-none  text-white px-2"
                    onClick={() => {
                      dispatch({ type: "LOGOUT" });
                      history.push("/");
                    }}
                  >
                    <span>Logout </span> <ExitToAppTwoToneIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-wrap">
            <div className="w-full sm:w-1/5 bg-gray-200 px-8 sm:pt-32 pt-5">
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
            <div className="w-full h-auto  sm:w-4/5 bg-gray-400 px-8 pt-10 pb-20">
              <div className="">
              <div className="w-full bg-white h-auto sm:h-40 p-4">
                <div className="w-full">
                  <div className=" sm:text-2xl text-lg font-extrabold text-indigo-800 hover:text-indigo-600 sm:p-4 px-4 py-2 text-center">
                    Hello! {state.user ? state.user.fullName : null}
                  </div>
                </div>
                <div className="w-full flex px-5 sm:px-10">
                  <div className="h-10 w-10 bg-indigo-800 hover:bg-indigo-600 rounded-full">
                    <i className="p-3 text-white text-xl far fa-lightbulb"></i>
                  </div>
                  <div className="px-5 sm:px-10">
                    <div className="sm:text-xl text:lg font-bold ">
                      Need Help?
                    </div>
                    <div className=" text-sm text-justify sm:text-md">
                      Sometimes, we can hit a hard points while sending or
                      sharing a file. If you think you need help using Fileseat,
                      kindly click{" "}
                      <span className="underline text-indigo-700">here</span> to
                      request support.
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full flex-col sm:flex sm:flex-row pt-4 sm:pt-10">
                <div className="w-full sm:w-1/2 h-full  bg-white px-10 py- my-4 mr-2 sm:mr-4">
                  <div className="sm:px-10 px-5  py-12">
                    <div className="text-xl text-black font-semibold mb-4">
                      Recent Files
                    </div>
                    <p className="text-black ">
                      These are the recent files you sent in the past 7days.
                      Files older than 7days will be automatically trashed by
                      bots on the platform.
                    </p>
                    <div className="flex my-10">
                      <div className="w-full sm:w-1/12">
                        <i className="far text-3xl text-indigo-700 pt-2 fa-file-video"></i>
                      </div>
                      <div className="w-full sm:w-11/12">
                        <div className="text-lg font-semibold">
                          File_to_limo.mp4
                        </div>
                        <div>
                          28-04-2020{" "}
                          <a
                            className="text-indigo-600"
                            href="mailto:isaac.orija@gmail.com"
                          >
                            <u className="p-2">Sent to isaac.orija@gmail.com</u>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-10">
                      <div className="w-full sm:w-1/12">
                        <i className="far fa-file-pdf text-3xl text-red-700 pt-2"></i>
                      </div>
                      <div className="w-full sm:w-11/12">
                        <div className="text-lg font-semibold">
                          NDA-signed.pdf
                        </div>
                        <div>
                          26-04-2020{" "}
                          <a
                            className="text-indigo-600"
                            href="mailto:sellaboye@gmail.com"
                          >
                            <u className="p-2">Sent to sellaboye@gmail.com</u>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-10">
                      <div className="w-full sm:w-1/12">
                        <i className="far fa-file-archive text-3xl text-indigo-700 pt-2"></i>
                      </div>
                      <div className="w-full sm:w-11/12">
                        <div className="text-lg font-semibold">
                          multifiles.zip
                        </div>
                        <div>
                          26-04-2020{" "}
                          <a
                            className="text-indigo-600"
                            href="mailto:eyiwumiolaboye@gmail.com"
                          >
                            <u className="p-2">
                              Sent to eyiwumiolaboye@gmail.com
                            </u>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-10">
                      <div className="w-full sm:w-1/12">
                        <i className="far fa-file-word text-3xl text-red-700 pt-2"></i>
                      </div>
                      <div className="w-full sm:w-11/12">
                        <div className="text-lg font-semibold">
                          user-story.docx
                        </div>
                        <div>
                          25-04-2020{" "}
                          <a
                            className="text-indigo-600"
                            href="mailto:eyiwumiolaboye@gmail.com"
                          >
                            <u className="p-2">
                              Sent to eyiwumiolaboye@gmail.com
                            </u>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-10">
                      <div className="w-full sm:w-1/12">
                        <i className="far fa-file-audio text-3xl text-indigo-700 pt-2"></i>
                      </div>
                      <div className="w-full sm:w-11/12">
                        <div className="text-lg font-semibold">
                          hearbreak.mp3
                        </div>
                        <div>
                          24-04-2020{" "}
                          <a
                            className="text-indigo-600"
                            href="mailto:eyiwumiolaboye@gmail.com"
                          >
                            <u className="p-2">
                              Sent to eyiwumiolaboye@gmail.com
                            </u>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Link
                        to="/history"
                        className="bg-indigo-700 hover:bg-indigo-500 text-white text-sm py-1 px-3 font-semibold rounded rounded-lg"
                      >
                        More{" "}
                        <i className="fas fa-step-forward text-white text-xs"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full  sm:w-1/2 bg-white px-10 py-10 my-4 sm:ml-4">
                  <div className="font-semibold text-black text-xl mb-5">
                    Quick Actions
                  </div>
                  <div className="flex justify-between px-2 py-4 sm:px-10 sm:py-20">
                    <div className="sm:w-1/3 w-full ">
                      <div className="flex justify-center">
                        <div className="h-20 w-20 rounded-full hover:bg-indigo-500 bg-indigo-700">
                          {" "}
                          <i className="w-1/4 far fa-share-square text-white p-6 text-3xl"></i>
                        </div>
                      </div>
                      <div className="mt-8 text-center font-semibold">
                        Share files
                      </div>
                    </div>
                    <div className="sm:w-1/3 w-full">
                      <div className="flex justify-center">
                        <div className="h-20 w-20 rounded-full hover:bg-indigo-500 bg-indigo-700">
                          {" "}
                          <i className="far fa-bell w-1/4 text-white p-6 text-3xl"></i>
                        </div>
                      </div>
                      <div className="mt-8 text-center font-semibold">
                        What's new?
                      </div>
                    </div>
                    <div className="sm:w-1/3 w-full">
                      <div className="flex justify-center">
                        <div className="h-20 w-20 rounded-full hover:bg-indigo-500 bg-indigo-700">
                          <i className="fas fa-cog w-1/4 text-white p-6 text-3xl"></i>
                        </div>
                      </div>
                      <div className="mt-8 text-center font-semibold">
                        User Settings
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="sm:px-5 px-2 sm:py-20 py-4">
                    <div className="text-xl font-black font-semibold">
                      Stats
                    </div>
                    <div className="flex sm:flex-row flex-col mt-8">
                      <div className="bg-blue-700 hover:bg-blue-800 shadow-inner w-full sm:w-1/3 h-20 rounded-md p-4">
                        <div className="text-sm text-white font-semibold">
                          Total Files Sent
                        </div>
                        <div className="flex">
                          <div className="text-white text-xl font-bold">
                            300
                          </div>
                          <div className="ml-auto mt-2">
                            <i className="fas fa-file-import text-white font-semibold text-2xl"></i>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-700 hover:bg-indigo-800 shadow-inner my-5 sm:m-0  w-full sm:w-1/3 h-20 rounded-md sm:mx-4 p-4">
                        <div className="text-sm text-white font-semibold">
                          Total Files Received
                        </div>
                        <div className="flex">
                          <div className="text-white text-xl font-bold">
                            200
                          </div>
                          <div className="ml-auto mt-2">
                            <i className="far fa-folder-open text-white font-semibold text-2xl"></i>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-700 hover:bg-red-800 w-full sm:w-1/3 shadow-inner h-20 rounded-md p-4">
                        <div className="text-sm text-white font-semibold">
                          Total Expired Files
                        </div>
                        <div className="flex">
                          <div className="text-white text-xl font-bold">
                            200
                          </div>
                          <div className="ml-auto mt-2">
                            <i className="fas fa-trash-alt text-white font-semibold text-2xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
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
