import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import LoginPicture from "../assets/images/ThreeHappyFriends.jpg";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LeftNavbar, RightLoginNavbar } from "./Navbar";
import { AuthContext } from "./Home";
import { Spinner } from "../utils/index";

const LoginRightStyles = {
  background: {
    backgroundImage: "url(" + LoginPicture + ")"
  }
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("This is not a valid email"),
  password: Yup.string()
    .min(8, "Your password cannot be fewer than 8 characters")
    .required("Password is required!")
});

const Login = () => {
  let history = useHistory();
  const { dispatch } = React.useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [signIn, setSignIn] = useState(false);
  const handleLogin = values => {
    // console.log(values);
    setSignIn(true);
    axios
      // .post("http://localhost:3005/api/v1/users/login", values, {
      .post("https://api.fileseat.com/api/v1/users/login", values, {
        headers: {
          "Accept": "application/json",
        }
      })
      .then(response => {
        setSuccess("You successfully logged in");
        console.log(response.data);
        dispatch({ type: "LOGIN", payload: response.data });
        setTimeout(() => history.push("/user"), 1000);
      })
      .catch(err => {
        if (err.response) {
          setSignIn(false);
          setErr(err.response.data.message);
        } else {
          console.log(err);
          setSignIn(false);
          setErr("Unable to connect to the server");
        }
      });
  };

  return (
    <HelmetProvider>
      <div className="h-full flex flex-wrap -m-2">
        <Helmet>
          <title> Login: Welcome back to your Fileseat Account.</title>
          <meta name="description" content="Login and view your file sharing history" />
        </Helmet>
        <div className="sm:w-1/2 w-full m-0 sm:px-20 sm:py-10 p-10 bg-gray-300">
          <LeftNavbar />
          {err ? (
            <div className="w-4/5 bg-red-100 my-2 border py-1 border-bred-300 rounded-lg mx-auto  text-center text-red-500">
              {err}{" "}
            </div>
          ) : null}
          {success ? (
            <div className="w-4/5 bg-blue-100 my-2 border py-1 border-blue-300 rounded-lg mx-auto text-center">
              {success}
            </div>
          ) : null}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form className="sm:w-3/5 w-full rounded-larger bg-white my-10 py-8 px-4 sm:px-12 sm:py-8 sm:my-20 sm:mx-auto mx-2 shadow-lg">
                <h1 className="text-center text-2xl font-bolder mb-4">
                  Welcome Back
              </h1>
                <div className="text-center font-semibold">
                  Login to your account
              </div>
                <div className="mb-4 mt-12">
                  <label className="font-black" htmlFor="email">
                    Email
                </label>
                  <Field
                    name="email"
                    className="border-b-2 bg-indigo-100 h-10 border-indigo-700 w-full"
                    type="email"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600 text-xs">{errors.email} </div>
                  ) : null}
                </div>
                <div className="mb-8">
                  <label className="font-black" htmlFor="password">
                    Password
                </label>
                  <Field
                    name="password"
                    className="border-b-2 bg-indigo-100 h-10 border-indigo-700 w-full"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-600 text-xs">{errors.password}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="rounded-full shadow-lg bg-indigo-700 w-full focus:outline-none hover:bg-indigo-500 text-white p-2"
                >
                  {signIn ? <Spinner /> : "Login"}
                </button>
                <div className='text-center m-2'>
                  <Link to='/forgot' className="m-4 text-center text-purple-700 font-semibold text-sm">Forgot password?</Link>
                </div>
                <div className="m-6 text-center text-xs">
                  Don't have an account yet?
                <Link className="ml-2 text-purple-500 font-bold" to="/newauth">
                    Signup here.
                </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="sm:w-1/2 bg-cover" style={LoginRightStyles.background}>
          <RightLoginNavbar />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;
