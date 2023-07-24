import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Stories() {
    return(
        <div className="relative bg-white">
            <div className="absolute left-2 top-12">
                <a className="bg-white text-gray-400 flex items-center justify-content rounded-full text-sm w-6 h-6 shadow-md cursor-pointer"
                   href="">
                    <FontAwesomeIcon className="mx-auto" icon={"chevron-left"}/>
                </a>
            </div>
            <div className="absolute right-2 top-12">
                <a className="bg-white text-gray-400 flex items-center justify-content rounded-full text-sm w-6 h-6 shadow-md cursor-pointer"
                   href="">
                    <FontAwesomeIcon className="mx-auto" icon={"chevron-right"}/>
                </a>
            </div>
            <ul className="border rounded-lg border-slate-200 p-4 flex justify-center space-x-4 overflow-x-auto">
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://github.com/mdo.png" alt=""/>
                        </a>
                    </div>
                    <a href="" className="w-16 cursor-pointer truncate">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11222222222222
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/7.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="w-16 cursor-pointer truncate">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11333333333333
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/75.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="cursor-pointer">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/women/75.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="cursor-pointer">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/women/5.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="cursor-pointer">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/7.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="cursor-pointer">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/75.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="cursor-pointer">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11
                        </span>
                    </a>
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">
                            <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/women/75.jpg" alt=""/>
                        </a>
                    </div>
                    <a href="" className="cursor-pointer">
                        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">
                            User11
                        </span>
                    </a>
                </li>
                {/*<li className="flex flex-col items-center space-y-1">*/}
                {/*    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
                {/*        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
                {/*            <img className="rounded-full w-16 h-16" src="https://randomuser.me/api/portraits/women/5.jpg" alt=""/>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <a href="" className="cursor-pointer">*/}
                {/*        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
                {/*            User11*/}
                {/*        </span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}
