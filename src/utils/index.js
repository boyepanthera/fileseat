import React, {useState} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import sentImage from "../assets/images/sent.svg";
import axios from "axios";
import Downloader from  'js-file-download';

export const Spinner = () => (
  <span>
    Signing In... <i className="fas fa-spinner fa-pulse"></i>
  </span>
);

export const ResetSpinner = () => (
  <span>
    <i className="fas fa-spinner fa-pulse"></i>
  </span>
);

const styles = buildStyles({
  textColor: "#4C51BF",
  textSize: "16px",
  pathColor: "#4C51BF",
  trailColor: "#A3BFFA",
  backgroundPadding: "5px"
});

export const Uploading = props => {
  return (
    <div className="items-center my-8 mx-auto sm:mx-0 sm:max-w-sm rounded-larger bg-white w-full sm:w-1/4 shadow-lg rounded p-8">
      <div className="text-3xl text-center font-bold mb-4">FILESEAT</div>
      <div className='flex justify-center'>
        <CircularProgressbar
          strokeWidth={6}
          className="my-4 h-48 w-48 mx-auto border-indigo-700"
          styles={styles}
          value={props.progress}
          text={`${props.progress}%`}
        />
      </div>
      <div className="text-center text-xl uppercase font-bold">Transfering...</div>
      <div className="my-2">{props.fileName}</div>
      <div className="items-center flex justify-start font-bold">To: </div>
      <div className="my-2">{props.receipient}</div>
      <button className="rounded-full w-full bg-indigo-700 hover:bg-indigo-500 focus:outline-none p-2 mt-4 mx-auto text-white font-semibold">
        Cancel...
      </button>
    </div>
  );
};

export const Uploaded = () => (
  <div className="items-center my-8 mx-auto sm:mx-0 sm:max-w-sm rounded-larger bg-white w-full sm:w-1/4 shadow-lg rounded p-8">
    <div className="text-3xl text-center font-bold mb-4">FILESEAT</div>
    <div className="items-center justify-center flex mb-4">
      <img
        src={sentImage}
        className="h-48 w-48"
        alt="Sent success jubilation!"
      />
    </div>
    <div className="text-center font-bold text-2xl mb-4">SENT!!!</div>
    <div className="text-center font-bold mb-4">
      The download email has been sent - your file's seat is available for
      7days.
    </div>
    <button
      className="bg-indigo-700 opacity-75 w-full rounded-full h-10 text-white font-semibold mx-auto my-4"
      disabled={true}
    >
      Done!
    </button>
  </div>
);

export const Downloading = props => {
  let [progress, setProgress] = useState(0);
  let [loading, setLoading] = useState(false);
  const handleDownload = async()=> {
    try {
      setLoading(true);
      // let res = await axios.get(`http://localhost:3005/api/v1/files/${props.fileName}`)
      // let res = await axios.get(`https:api.fileseat.com/api/v1/files/${props.fileName}`)
      let res = await axios.get(props.url, 
        {
        onDownloadProgress: progressEvent => {
          setProgress(
            Math.round((progressEvent.loaded * 100)/progressEvent.total )
          )
          if(progress ===100) {
            setLoading(false);
          }
        }
       }
        
        );
      // console.log(props.url)
      // Downloader(props.url, props.fileName)
      Downloader(res.data, props.fileName)
      // fetch(`http://localhost:3005/api/v1/files/${props.fileName}`)
        // .then(res=>res.blob())
        // .then(blob=>{
        //   let url = window.URL.createObjectURL(blob)
        //   let a  = document.createElement('a');
        //   a.href =url;
        //   a.click();
        // })

    // console.log('download clicked!!!')
    // let res = await axios.get(`http://localhost:3005/api/v1/files/${props.fileName}`, 
    // let res = await axios.get(`https://api.fileseat.com/api/v1/files/${props.fileName}`
    // , { 
    //     onDownloadProgress: progressEvent => {
    //       setProgress(
    //         Math.round((progressEvent.loaded * 100)/progressEvent.total )
    //       )
    //       console.log('download', progressEvent)
    //     }
    //    }
      //  )
      // if (res.ok) {
        // let blob = await res.blob();
        // console.log(res);
        // const blobURL = await URL.createObjectURL(res);
        // const link = document.createElement('a');
        // link.href=res.data;
        // link.style = "display :none";
        // document.body.appendChild(link);
        // link.click();
      // }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log('There is issue connecting to server for download!', err);
      }
    }
  }

  return (
    <div className="items-center my-8 mx-auto sm:mx-0 sm:max-w-sm rounded-larger bg-white w-full sm:w-1/4 shadow-lg rounded p-8">
      <div className="text-3xl text-center font-bold mb-4">FILESEAT</div>
      <div className='flex justify-center'>

        {loading ?
          <CircularProgressbar
            strokeWidth={6}
            className="my-4 h-48 w-48 mx-auto border-indigo-700 fas fa-download"
            styles={styles}
            value={progress}
            text={`${progress}%`}
          /> :
          <div onClick={handleDownload} className='h-40 m-4 w-40 border-indigo-700 border-8 rounded-full  flex justify-center'>
            <span className='my-auto'>
              <i className='fas text-indigo-700 fa-download text-3xl'></i>
            </span>
          </div>
        }
      </div>
      <div className="text-center text-xl uppercase font-bold">Download</div>
      <div className="my-2 w-full">{props.fileName}</div>
      <div className="items-center flex justify-start font-bold">From: </div>
      <div className="my-2">{props.sender}</div>
      <div>
        <button onClick={handleDownload} className="rounded-full w-full bg-indigo-700 hover:bg-indigo-500 focus:outline-none mt-6 p-2 mx-auto text-white font-semibold">
          {
          loading ? 
          <span>Downloading... <ResetSpinner/> </span> : progress === 100 && !loading ?
          <span>Done !</span> :
          <span>Download <i className='fas fa-download'></i></span>
          } 
        </button>
      </div>
    </div>
  );
};