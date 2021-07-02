import React from 'react'
import useAccountFirestore from '../../hooks/useAccountFirestore'

export default function ImageGrid({ setSelectedImg }) {

    const { docs } = useAccountFirestore('profile-photos');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" 
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}
