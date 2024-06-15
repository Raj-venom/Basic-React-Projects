import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ url, title, btn = "Edit", className = "", btnClass = "" }) {

    const navigate = useNavigate()
    return (
        <div className={`m-2 w-[300px] h-[420px] bg-white overflow-hidden ${className}`}>
            <img src={url} className='w-full h-[300px] object-contain' alt={title} />
            <div className={`pb-2 ${btnClass}`}>
                <p className='text-lg font-semibold text-center'>{title}</p>
            </div>

            <div className={`m-2 ${btnClass} text-white flex items-center justify-center`}>

                <button
                    className={`bg-zinc-500 w-[100px] h-9 rounded-lg `}
                    onClick={() => (navigate(`/edit?url=${url}`))}

                >{btn}</button>
            </div>
        </div>
    );
}

export default Card;
