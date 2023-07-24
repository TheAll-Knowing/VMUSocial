export default function Suggestions() {
    return(
        <>
            <div className="flex flex-row pt-5">
                <div className="w-72 font-bold text-gray-500 text-sm">
                    Suggested for you
                </div>
                <div className="w-32 text-sm text-right">
                    <a href="" className="text-black-400 text-xs">See All</a>
                </div>
            </div>
            <ul className="p-1">
                <div className="flex py-2">
                    <div className="flex items-center">
                        <a href="" className="inline-block align-top">
                            <img className="rounded-full" src="https://randomuser.me/api/portraits/women/1.jpg"
                                 alt=""
                                 width="35"/>
                        </a>
                        <div className="inline-block ml-2">
                            <a href="" className="text-sm font-medium">
                                User1123
                            </a>
                            <div className="text-gray-500 text-xs">
                                Suggested for you
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 items-center flex justify-end">
                        <a href="" className="text-xs text-sky-500 font-bold hover:text-sky-900">Follow</a>
                    </div>
                </div>
                <div className="flex py-2">
                    <div className="flex items-center">
                        <a href="" className="inline-block align-top">
                            <img className="rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg"
                                 alt=""
                                 width="35"/>
                        </a>
                        <div className="inline-block ml-2">
                            <a href="" className="text-sm font-medium">
                                User1123
                            </a>
                            <div className="text-gray-500 text-xs">
                                Suggested for you
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 items-center flex justify-end">
                        <a href="" className="text-xs text-sky-500 font-bold hover:text-sky-900">Follow</a>
                    </div>
                </div>
                <div className="flex py-2">
                    <div className="flex items-center">
                        <a href="" className="inline-block align-top">
                            <img className="rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"
                                 alt=""
                                 width="35"/>
                        </a>
                        <div className="inline-block ml-2">
                            <a href="" className="text-sm font-medium">
                                User1123
                            </a>
                            <div className="text-gray-500 text-xs">
                                Suggested for you
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 items-center flex justify-end">
                        <a href="" className="text-xs text-sky-500 font-bold hover:text-sky-900">Follow</a>
                    </div>
                </div>
            </ul>
        </>
    );
}
