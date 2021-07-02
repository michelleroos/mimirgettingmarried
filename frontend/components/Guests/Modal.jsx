import React from 'react'

export default function Modal({ selectedImg }) {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}
