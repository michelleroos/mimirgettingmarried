import React, { useState } from 'react';
import ProgressBar from '../Progressbar/ProgressBar';

export default function UploadForm({ pathname }) {
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [collection, setCollection] = useState('');
    const types = ['image/png', 'image/jpeg'];

    const path = window.location.href;
    console.log(path);

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (path.includes('account')) {
            setCollection('sunday');
        } else if (path.includes('location')) {
            setCollection('location');
        } else {
            setCollection('am-photos');
        }
        
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
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div className="file">{ file.name }</div>}
                {file && <ProgressBar file={file} setFile={setFile} collection={collection}/>}
            </div>
        </form>
    )
}
