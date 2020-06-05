import React from 'react';
import {NavbarColor} from './Navbar';
import {Link} from 'react-router-dom';
import RepeatDocument from "../assets/images/about-repeat-grid.png";
import FileSyncIcon from "../assets/images/about-purple-file-sync.svg"

export const About = ()=> {
    return (
      <div className="min-h-screen h-full bg-gray-200 sm:p-20 p-10">
        <NavbarColor />
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 px-6 py-40">
            <div>
              <div className="uppercase text-4xl font-extrabold mb-5 text-purple-800">
                We are new. we are awesome
              </div>
              <div className="text-justify font-semibold mb-10">
                Fileseat is a cloud based infrastructure designed to allow you
                transfer different types of files for free to other users on the
                internet. Fileseat was built with the simplicity and
                effectiveness in mind. It is a service that can be compared, a
                priori, with any premium cloud file transfer services. Fileseat
                allows you to send up to 2GB to your counterparty. You don't
                need to delete the file, Fileseat robots run automated jobs
                daily to delete files over 7days on the platform.
              </div>
              <div className="my-6">
                <Link
                  className="font-light bg-purple-700 hover:bg-purple-500 text-white p-2 w-16 rounded-lg"
                  to="/team"
                >
                  Meet the Team
                </Link>
              </div>
              <div className="my-6">
                <Link
                  className="font-light bg-purple-700 hover:bg-purple-500 text-white w-16 h-5 p-2 rounded-lg"
                  text-white
                  to="/donate"
                >
                  Support Fileseat
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="m-auto">
              <img
                alt="repeated document"
                className="z-0 mt-16 mx-auto"
                src={RepeatDocument}
              />
              <img alt="file sync" className="z-10 -mt-48" src={FileSyncIcon} />
            </div>
          </div>
        </div>
      </div>
    );
}