import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import BackgroundImage from "../assets/images/bg.png";
import {Navbar} from './Navbar';

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
        <>
            <Helmet>
                <title>Fileseat, easy and fast way to share large files.</title>
                <meta name="description" content="Sometimes we want to share those files that are way above 50mb then our mail service tell us that is not possible to attach, attachment and mails? Fileseat can handle it all for you." />
            </Helmet>
            <div className='h-screen p-8 sm:p-20' style={LoginStyles.background}>
                <Navbar/>
                <div>Users will download here</div>
                <div>File to be downloaded {downloadID}</div>
                <button>Dowload</button>
                <Link to='/'>Go home</Link>
            </div>
        </>
    )
}