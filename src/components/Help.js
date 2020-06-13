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
  const [currentOption, setCurrentOption] = useState(17748)
  const [opt, setOptions] = useState({
    PBFPubKey: process.env.REACT_APP_PBGPubKey,
    production: true,
    customer_email: '',
    customer_phone: '',
    payment_plan :17748,
    name : '',
    txref: uuid (),
    redirect_url : 'https://fileseat.com/thanks-for-donating',
    amount:0
  });
  const final = {...opt, payment_plan:currentOption}
  let { initializePayment } = useRavePayment(final);
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
                  <div className="h-16 flex shadow-md">
                    <div
                      name="once"
                      className={`${
                        currentOption && currentOption === 17749
                          ? `w-1/2  bg-purple-800 text-white focus:text-white hover:text-white focus:bg-purple-800 focus:outline-none flex flex-wrap shadow-lg hover:bg-purple-300`
                          : `w-1/2  bg-white focus:text-white hover:text-white focus:bg-purple-800 focus:outline-none flex flex-wrap focus:shadow-lg hover:bg-purple-300`
                      } `}
                      tabIndex="0"
                      onClick={() => {
                        setCurrentOption(17749);
                      }}
                    >
                      <div className="m-auto">
                        <div className="flex flex-wrap justify-between ">
                          <div className="">
                            <i
                              className={`${
                                currentOption && currentOption === 17749
                                  ? `fas fa-check-circle text-white focus:bg-white hover:bg-white`
                                  : `fas fa-check-circle text-purple-800`
                              }`}
                            ></i>
                          </div>
                          <div className="sm:text-lg text-sm font-semibold tracking-wide ml-2">
                            Donate Once
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      name="payment_plan"
                      className={`${
                        currentOption && currentOption === 17748
                          ? `w-1/2  bg-purple-800 text-white focus:text-white hover:text-white focus:bg-purple-800 focus:outline-none flex flex-wrap shadow-lg hover:bg-purple-300`
                          : `w-1/2  bg-white focus:text-white hover:text-white focus:bg-purple-800 focus:outline-none flex flex-wrap focus:shadow-lg hover:bg-purple-300`
                      } `}
                      tabIndex="0"
                      onClick={() => {
                        setCurrentOption(17748);
                      }}
                    >
                      <div className="m-auto">
                        <div className="flex flex-wrap justify-between ">
                          <div className="">
                            <i
                              className={`${
                                currentOption && currentOption === 17748
                                  ? `fas fa-check-circle text-white focus:bg-white hover:bg-white`
                                  : `fas fa-check-circle text-purple-800`
                              }`}
                            ></i>
                          </div>
                          <div className="sm:text-lg text-sm  font-semibold tracking-wide ml-2">
                            Donate Monthly
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Field
                    name="name"
                    className="my-2 placeholder-gray-500 font-semibold focus:bg-white shadow-md  placeholder-opacity-100 h-10 bg-gray-100 p-2 w-full rounded-md"
                    placeholder="Your name on donation"
                    onChange={(e) => {
                      setFieldValue("name", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  />
                  <Field
                    name="customer_email"
                    type="email"
                    className=" placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-100 shadow-md p-2 w-full rounded-md"
                    placeholder="johndonate@fileseat.com"
                    onChange={(e) => {
                      setFieldValue("customer_email", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  />
                  <Field
                    name="customer_phone"
                    type="tel"
                    className="my-2 placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-100 shadow-md p-2 w-full rounded-md"
                    placeholder="09028320494"
                    onChange={(e) => {
                      setFieldValue("customer_phone", e.target.value);
                      setOptions({ ...opt, [e.target.name]: e.target.value });
                    }}
                  />
                  <CountriesSelect />
                  <div className="relative">
                    <Field
                      className="my-2 appearance-none placeholder-gray-500 font-semibold  placeholder-opacity-100 h-10 bg-gray-100 shadow-md p-2 w-full rounded-md"
                      as="select"
                      name="amount"
                      onChange={(e) => {
                        setFieldValue("amount", e.target.value);
                        setOptions({ ...opt, [e.target.name]: e.target.value });
                      }}
                    >
                      <option value={0}>Select Amount</option>
                      <option value={500}> &#8358; 500</option>
                      <option value={1000}> &#8358; 1000</option>
                      <option value={2000}> &#8358; 2000</option>
                      <option value={3000}> &#8358; 3000</option>
                      <option value={0}>I will set my amount</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  <button
                    className="w-full p-2 focus:outline-none rounded rounded-md bg-purple-800 hover:bg-purple-600 font-semibold text-white uppercase"
                    type="submit"
                  >
                    <i className="fas fa-donate text-white shadow-lg"></i>{" "}
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