import React from 'react'
import './styles.css'
type Props = {}

const Loader = (props: Props) => {
    return (
        <div className='absolute h-full w-screen  flex justify-center bg-white items-center'>

            <div className="dot-spinner relative ">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>
    )
}

export default Loader;