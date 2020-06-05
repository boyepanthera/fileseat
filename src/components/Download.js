import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import BackgroundImage from "../assets/images/bg.jpg";
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Navbar} from './Navbar';
import {Downloading} from '../utils/index';
import Axios from 'axios';

export const Download = () => {
    const { downloadID } = useParams();
    const [sender, setSender] = useState(null)
    const [err, setErr] = useState(null);
    const [url, setURL] = useState ('');
    const [downloadURL, setDownloadURL] = useState('')
    const LoginStyles = {
        background: {
            backgroundImage: "url(" + BackgroundImage + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    };
    useEffect(() => {
        (
            async ()=> {
                try {
                    // let res= await Axios.get(`http://localhost:3005/api/v1/files/${downloadID}/details`)
                    let res= await Axios.get(`https://api.fileseat.com/api/v1/files/${downloadID}/details`)
                    setSender(res.data.senderEmail);
                    setURL(res.data.url);
                    setDownloadURL(res.data.downloadURL)
                    // console.log(res.data)
                }catch (err) {
                    if(err.response) {
                        console.log(err.response);
                        setErr (err.response.data.message);
                    } else {
                        setErr('Unable to connect to server!');
                        // console.log('Unable to connect to server!');
                    }
                }
            }
        )()
    }, [downloadID])
    return (
        <HelmetProvider>
            <Helmet>
                <title>Fileseat, easy and fast way to share large files.</title>
                <meta name="description" content="Sometimes we want to share those files that are way above 50mb then our mail service tell us that is not possible to attach, attachment and mails? Fileseat can handle it all for you." />
            </Helmet>
            <div className='h-screen p-8 sm:p-20' style={LoginStyles.background}>
                <Navbar/>
                {err ? (
                    <div className=" bg-red-200 mx-auto sm:mx-0 sm:max-w-sm w-full sm:w-1/4 shadow-sm rounded px-8 py-1 border-red-300 text-center text-red-500">
                        {err}{" "}
                    </div>
                ) : null}
                <Downloading 
                fileName={downloadURL} 
                sender={sender}
                url = {url}
                />
            </div>
        </HelmetProvider>
    )
}