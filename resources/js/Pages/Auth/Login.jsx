import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/style.css';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            <img className="cover" src="img/cover/cover.jpg" alt="" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="container min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="card lg:card-side bg-gray-100 shadow-2xl">
                    <figure className="max-w-md"><img src="img/logo/logo-1.png" alt="logo" /></figure>
                    <div className="card-body">
                        <h1 className=" text-center text-black">LOGIN !</h1>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel forInput="email" value="Email" />

                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel forInput="password" value="Password" />

                                <TextInput
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                    />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>
                            {/* <PrimaryButton className="mt-4 full" processing={processing}>
                    Log in
                </PrimaryButton> */}
                            <button className="mt-4 mb-5 pb-5 w-full h-10 cursor-pointer 
                    rounded-md bg-gray-800 px-4 py-3 text-center 
                    text-sm font-semibold uppercase text-white 
                    transition duration-200 ease-in-out 
                    hover:bg-gray-900">
                                Log in
                            </button>

                            <div className="pt-5 mt-5 text-center">
                                {canResetPassword && (
                                    <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>

                            <div className="text-center">
                                <Link
                                    href={route('register')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    Don't have an account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
