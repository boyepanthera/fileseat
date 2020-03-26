import React from 'react';
import {useParams } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import BackgroundImage from "../assets/images/bg.png";
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Navbar} from './Navbar';
import {Downloading} from '../utils/index';

export const Download = () => {
    const { downloadID } = useParams();
    const LoginStyles = {
        background: {
            backgroundImage: "url(" + BackgroundImage + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    };
    return (
        <HelmetProvider>
            <Helmet>
                <title>Fileseat, easy and fast way to share large files.</title>
                <meta name="description" content="Sometimes we want to share those files that are way above 50mb then our mail service tell us that is not possible to attach, attachment and mails? Fileseat can handle it all for you." />
            </Helmet>
            <div className='h-screen p-8 sm:p-20' style={LoginStyles.background}>
                <Navbar/>
                {/* <div className='bg-white rounded-lg shadow-2xl w-full sm:w-1/4 p-8'> */}
                    {/* <div>Users will download here</div>
                    <div>File to be downloaded {downloadID}</div>
                    <button>Dowload</button>
                    <Link to='/'>Go home</Link> */}
                    <Downloading fileName={downloadID}/>
                {/* </div> */}
            </div>
        </HelmetProvider>
    )
}