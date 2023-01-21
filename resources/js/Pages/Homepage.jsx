import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Navbar from '@/Components/Navbar';
import '../../css/style.css';

export default function Homepage(props) {
    return (
        <>
            <Head title="Home" />
            <img className="cover" src="img/cover/cover.jpg" alt="" />
            <Navbar />
                <div className="hero pt-5 mt-10 px-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="img/cover/interview.svg" alt="ilustrasi interview" className="max-w-md rounded-lg" />
                        <div className="text-white">
                            <h1 className="text-5xl font-bold">Welcome to Job Portal !</h1>
                            <p className="py-6 pr-6">This platform acts as a facilitator between job seekers and companies 
                            looking for smart talent. This Job Portal has a scope in the IT world, making it easier for programmers, 
                            developers out there to find work.</p>
                            <Link href={route('register')}><button className="btn btn-success" >Get Started</button></Link>
                        </div>
                    </div>
                </div>
        </>

    )
}