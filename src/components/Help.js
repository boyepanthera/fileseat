import React from 'react';
import {NavbarHelp} from './Navbar';
import Donation from '../assets/images/donation.svg'
import {Formik, Form, Field} from 'formik';
import {CountriesSelect} from "../utils/countries";

const styles = {
  firstElement: {
    height: "50%",
  },
  secondElement: {
    height: "50%",
  },
};

export const Help = () => {
    const handleSubmit = values =>  {
        console.log(values);
    }
    return (
      <div className="h-full min-h-screen">
        <div
          style={styles.firstElement}
          className="sm:px-20 sm:py-10 p-5 h-64 bg-purple-700"
        >
          <NavbarHelp />
          <div className="text-xl sm:text-2xl font-bolder text-white uppercase text-center my-12">
            Make a Donation
          </div>
          <div className="text-justify sm:w-3/5 md:w-1/3 lg:1/4 w-4/5 mx-auto text-white">
            Fileseat team dedicate their time and efforts to make sure there is
            continuous improvement on the platform. The platform is free to use
            but you can support the team with any amount.
          </div>
        </div>
        <div
          style={styles.secondElement}
          className="sm:px-20 sm:py-10 p-5 h-64 bg-gray-200"
        >
          <div className="w-full">
            <Formik
              initialValues={{
                country: "",
                amount: 0,
              }}
              onsubmit={handleSubmit}
            >
              {() => (
                <Form className="my-5 sm:w-3/5 md:w-1/3 lg:1/4 w-4/5 mx-auto">
                  <Field
                    name="Name"
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-400 p-2 w-full rounded-md"
                    placeholder="Your name on donation"
                  />
                  <CountriesSelect />
                  <Field
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-400 p-2 w-full rounded-md"
                    as="select"
                    name="amount"
                  >
                    <option value={0}>Select amount</option>
                    <option value={1000}>1000</option>
                    <option value={2000}>2000</option>
                    <option value={3000}>3000</option>
                    <option value={4000}>4000</option>
                    <option value={5000}>5000</option>
                  </Field>
                  <button
                    className="w-full p-2 focus:outline-none rounded rounded-md bg-purple-800 hover:bg-purple-600 font-semibold text-white uppercase"
                    type="submit"
                  >
                    Donate
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            <img className="h-64 w-64 mx-auto" src={Donation} alt="Donation" />
          </div>
        </div>
      </div>
    );
}