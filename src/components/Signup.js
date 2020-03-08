import React, { useState } from "react";
import SignupMan from "../assets/images/one-happy-man.jpg";
import { Formik, Form, Field } from "formik";
import { RightNavbar, LeftNavbarWhite } from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Spinner } from "../utils/index";

const SignupStyles = {
  background: {
    backgroundImage: "url(" + SignupMan + ")"
  }
};

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Fullname cannot be lower than 3 characters!")
    .max(50, "Fullname cannot be more than 50 characters!")
    .required("Fullname is required!!!"),
  email: Yup.string()
    .email("This is not a valid email")
    .required("Email is required!"),
  password: Yup.string()
    .min(8, "Password cannot be lower than 8 characters!")
    .max(35, "Password cannot be higher than 35 characters!")
    .matches(
      /^[A-Za-z0-9_@./#&"+-]*$/,
      "alphabets, characters and special characters"
    )
    .required("Password is required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords do not match"
  )
});

export const Signup = () => {
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleSignup = values => {
    setSubmitting(true);
    axios
      .post("https://api.fileseat.com/api/v1/users/register", values, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        console.log(response);
        setSuccess(response.data.message);
        setTimeout(() => history.push("/auth"), 2000);
      })
      .catch(err => {
        if (err.response) {
          setSubmitting(false);
          setErr(err.response.data.message);
          setTimeout(() => setErr(null), 5000);
        } else {
          console.log(err);
          setSubmitting(false);
          setErr("unable to connect to server");
          setTimeout(() => setErr(null), 5000);
        }
      });
  };
  let history = useHistory();
  return (
    <div className="h-full flex">
      <div className="bg-cover m-0 w-1/2" style={SignupStyles.background}>
        <div className="m-10">
          <LeftNavbarWhite />
        </div>
      </div>
      <div className="w-1/2 bg-gray-300">
        <div className="mt-12">
          <RightNavbar />
        </div>
        <div className="mt-32">
          {err ? (
            <div className="w-4/5 bg-red-100 my-2 border py-1 border-bred-300 rounded-lg mx-auto  text-center text-red-500">
              {err}
            </div>
          ) : null}
          {success ? (
            <div className="w-4/5 bg-blue-100 my-2 border py-1 border-blue-300 rounded-lg mx-auto text-center">
              {success}
            </div>
          ) : null}
        </div>
        <Formik
          onSubmit={handleSignup}
          validationSchema={SignupSchema}
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
        >
          {({ errors, touched }) => (
            <>
              <Form className="max-w-sm w-full my-auto bg-white rounded-larger mx-auto mb-32 p-8">
                <div className="text-center font-bold">Let's get started</div>
                <div className="text-center mb-8">
                  Create a FS account to get all features
                </div>
                <div className="mb-4">
                  <label className="font-semibold">Full name</label>
                  <Field
                    name="fullName"
                    className="h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full"
                  />
                  {errors.fullName && touched.fullName ? (
                    <div className="text-red-600 text-xs">
                      {errors.fullName}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label className="font-semibold">Email</label>
                  <Field
                    name="email"
                    className="h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600 text-xs"> {errors.email} </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label className="font-semibold">Password</label>
                  <Field
                    name="password"
                    type="password"
                    autoComplete="true"
                    className="h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-600 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label className="font-semibold">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    autoComplete="true"
                    className="h-10 bg-indigo-100 border-indigo-700 border-b-2  w-full"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="text-red-600 text-xs">
                      {" "}
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <button
                  className="rounded-full w-full bg-purple-600 h-10 text-white font-normal focus:outline-none"
                  type="submit"
                >
                  {submitting ? <Spinner /> : "Create account"}
                </button>
                <div className="text-center my-4 mx-auto text-xs">
                  Already have an account?
                  <Link className="text-purple-600 ml-2 font-bold" to="/auth">
                    Login here
                  </Link>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
