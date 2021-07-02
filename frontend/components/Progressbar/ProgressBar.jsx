import useStorage from '../../hooks/useStorage';
import React, { useEffect } from 'react'


export default function ProgressBar({ file, setFile, collection }) {

    const { url, progress } = useStorage(file, collection);
    console.log(collection);
    console.log(typeof collection);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    
    return (
        <div className="progress-bar" style={{ width: progress + '%' }}>
        </div>
    )
}
