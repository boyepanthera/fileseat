import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Download = () => {
    const { downloadID } = useParams();
    return (
        <>
            <div>Users will download here</div>
            <div>File to be downloaded {downloadID}</div>
            <button>Dowload</button>
            <Link to='/'>Go home</Link>
        </>
    )
}