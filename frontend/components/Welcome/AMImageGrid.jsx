import React from 'react'
import useFirestore from '../../hooks/useFirestore';

export default function AMImageGrid({ setSelectedImg }) {

    const { docs } = useFirestore('am-photos');

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap"
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}
