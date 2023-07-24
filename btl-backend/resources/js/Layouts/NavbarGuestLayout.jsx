import logo from './assets/vmu.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
export default function NavbarGuestLayout({children}) {
    return (
        <>
            <nav className="sticky top-0 w-full border border-b-1 z-50 bg-white">
                <div className="container max-w-5xl">
                    <div className="flex flex-row py-1 items-center">
                        <div className="basis-1/3">
                            <div className="w-10">
                                <a href="/">
                                    <img src={logo} alt="logo" width="48"/>
                                </a>
                            </div>
                        </div>
                        <div className="basis-1/3 hidden sm:block">
                            <div className="relative">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="absolute left-3 top-3 text-gray-300"/>
                                <input type="text" className="p-2 bg-gray-100 rounded-lg border-none md:w-80 pl-10 align-middle focus:ring-0 placeholder:font-light"/>
                            </div>
                        </div>
                        <div className="basis-2/3 sm:basis-1/3">
                            <ul className="flex flex-row space-x-4 p-2 text-2xl justify-end items-center">
                                <li>
                                    <a
                                        href={route('login')} className={`bg-sky-500 font-semibold py-0.5 px-5 rounded-lg text-md hover:bg-sky-600`}>
                                        <span className="text-sm text-white align-middle">Log In</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={route('register')} className="text-sm font-bold text-sky-500 align-middle hover:text-sky-800">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}
