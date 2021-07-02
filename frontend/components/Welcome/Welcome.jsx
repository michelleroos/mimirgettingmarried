import React, { useEffect, useState } from 'react';
import ProgressBar from '../Progressbar/ProgressBar';

export default function Welcome () {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    useEffect(() => {
        document.title = `Welcome | #mimirgettingmarried`;
    });

    const changeHandler = (e) => {
        let selected = e.target.files;
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select correct file type')
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
};