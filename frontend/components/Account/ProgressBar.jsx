import useAccountStorage from '../../hooks/useAccountStorage';
import React, { useEffect } from 'react'


export default function ProgressBar({ file, setFile }) {

    const { url, progress } = useAccountStorage(file);

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
