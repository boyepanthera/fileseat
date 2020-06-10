import React from 'react';
import {NavbarHelp} from './Navbar';
import Donation from '../assets/images/donation.svg'
// import {Formik, Form, Field} from 'formik';
// import {CountriesSelect} from "../utils/countries";
import {v4 as uuid} from 'uuid';
import dotenv from 'dotenv';
// import axios from 'axios';
// import { Redirect, useHistory } from 'react-router-dom';
import {useRavePayment} from 'react-ravepayment';
dotenv.config();

const styles = {
  firstElement: {
    height: "50%",
  },
  secondElement: {
    height: "50%",
  },
};

export const Help = () => {
    // let history = useHistory();
    // const handleSubmit =  async values =>  {
    //     let options = {
    //       PBFPubKey: process.env.REACT_APP_PBGPubKey,
    //       txref: uuid(),
    //       customer_email: values.email,
    //       customer_phone: "+2349228320494",
    //       currency:"NGN",
    //       amount :2000,
    //       production :false
    //     };
    //     console.log(options)
    // }
    let configs = {
      PBFPubKey: process.env.REACT_APP_PBGPubKey,
      txref: uuid(),
      customer_email: 'try@gma.com',
      customer_phone: "+2349228320494",
      currency: "NGN",
      amount: 2000,
      production: true,
    };
    let { initializePayment } = useRavePayment(configs);
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
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4  p-2 focus:outline-none rounded rounded-md bg-purple-800 hover:bg-purple-600 font-semibold text-white uppercase font-semibold' onClick={initializePayment()}>
              Donate
            </div>
          </div>
          <div>
            <img className="h-64 w-64 mx-auto" src={Donation} alt="Donation" />
          </div>
        </div>
      </div>
    );
}