import React from 'react';
import '../../css/style.css'

export default function Guest({ children }) {
    return (
        <div className="bg">
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="img/logo/logo-1.png" alt="logo"/></figure>
                <div className="card-body">
                    {children}
                </div>
            </div> */}
            {children}
        </div>

    );
}
