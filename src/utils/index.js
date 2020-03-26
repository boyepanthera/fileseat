import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import sentImage from "../assets/images/sent.svg";

export const Spinner = () => (
  <span>
    Signing In... <i className="fas fa-spinner fa-pulse"></i>
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
