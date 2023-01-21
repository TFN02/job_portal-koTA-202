import { Link } from "@inertiajs/react"
import '../../css/style.css'
// import route from "vendor/tightenco/ziggy/src/js"

const Navbar = ({ user }) => {
    console.log('isUser?', user)
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link href="/">
                    <img src="img/logo/logo.png" width={100} className="ml-5" alt="" />
                </Link>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link className="hover:bg-slate-500" href={route('login')}>Log In</Link></li>
                    <li><Link className="hover:bg-slate-500" href={route('register')}>Register</Link></li>
                </ul>
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                        {!user ?
                            <>
                                <li><Link href={route('login')} as="button">Login</Link></li>
                                <li><Link href={route('register')} as="button">Register</Link></li>
                            </>
                            :
                            <>
                                <li>
                                    <Link href={route('dashboard')} as="button" className="justify-between">
                                        Dashboard
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link href={route('logout')} method="POST" as="button">Logout</Link></li>
                            </>
                        }

                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar 