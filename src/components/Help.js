import React, {useState} from 'react';
import {NavbarHelp} from './Navbar';
import Donation from '../assets/images/donation.svg'
import {Formik, Form, Field} from 'formik';
import {CountriesSelect} from "../utils/countries";
import {v4 as uuid} from 'uuid';
import {useRavePayment} from 'react-ravepayment';

const styles = {
  firstElement: {
    height: "50%",
  },
  secondElement: {
    height: "50%",
  },
};

export const Help = () => {
  const [opt, setOptions] = useState({
    PBFPubKey: process.env.REACT_APP_PBGPubKey,
    production: true,
    customer_email: '',
    customer_phone: '',
    name : '',
    txref: uuid ()
  });
  let { initializePayment } = useRavePayment(opt);
    const handleSubmit =  () =>  {
        initializePayment();
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
                name: "",
                email: "",
                phone: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form className="my-5 sm:w-3/5 md:w-1/3 lg:1/4 w-4/5 mx-auto">
                  <div className="h-12 flex">
                    <div className="w-1/2 hover:bg-purple-700">
                      <Field
                        value="One-off"
                        className=" hover:bg-purple-700"
                        name="time"
                        type="radio"
                      />
                      <label className="mx-auto">Once</label>
                    </div>
                    <div className="w-1/2 hover:bg-purple-700">
                      <Field value="Monthly" name="time" type="radio" />
                      <label className="mx-auto">Monthly</label>
                    </div>
                  </div>
                  <Field
                    name="name"
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-400 p-2 w-full rounded-md"
                    placeholder="Your name on donation"
                    onChange={(e) => {
                      setFieldValue("name", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  />
                  <Field
                    name="customer_email"
                    type="email"
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-400 p-2 w-full rounded-md"
                    placeholder="johndonate@fileseat.com"
                    onChange={(e) => {
                      setFieldValue("customer_email", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  />
                  <Field
                    name="customer_phone"
                    type="tel"
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-400 p-2 w-full rounded-md"
                    placeholder="09028320494"
                    onChange={(e) => {
                      setFieldValue("customer_phone", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  />
                  <div className="flex flex-wrap">
                    <div className="w-4/5">
                      <CountriesSelect />
                    </div>
                    <div className="w-1/5">
                      <Field type="checkbox" />
                    </div>
                  </div>
                  <Field
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-400 p-2 w-full rounded-md"
                    as="select"
                    name="amount"
                    onChange={(e) => {
                      setFieldValue("amount", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  >
                    <option value={0}>Select amount</option>
                    <option value={500}>500</option>
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