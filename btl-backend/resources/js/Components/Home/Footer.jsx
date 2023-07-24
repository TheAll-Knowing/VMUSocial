export default function Footer() {
    return(
        <>
            <footer>
                <div className="pt-5 text-center">
                    <ul className="flex flex-row space-x-4 p-2 text-xs text-gray-400">
                        <li>
                            <a href="" className="cursor-pointer hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="" className="cursor-pointer hover:underline">
                                Help
                            </a>
                        </li>
                        <li>
                            <a href="" className="cursor-pointer hover:underline">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="" className="cursor-pointer hover:underline">
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="py-1">
                    <ul className="flex flex-row space-x-4 p-2 text-xs text-gray-400">
                        <li>
                            <p>
                                © 2023 VMUSocial By The All-Knowing
                            </p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
