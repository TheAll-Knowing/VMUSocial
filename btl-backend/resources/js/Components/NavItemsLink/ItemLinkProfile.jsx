import { Link } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ItemLink({ active = false, className = '',user, children,isSearchOpen, ...props }) {
    return (
        <Link
            {...props}
            className={'flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-10' + className}>
            {active ? (<>
                    <div className="text-2xl shrink-0">
                        <img className="rounded-full w-6 border-2 border-black border-solid" src={`/storage/`+user.image} alt="avatar profile"/>
                    </div>
                    <span className={`hidden ${!isSearchOpen && "lg:inline"} ${isSearchOpen && "hidden"} text-lg font-bold origin-left duration-250`}>{children}</span>
                </>)
                : (<>
                    <div className="text-2xl shrink-0">
                        <img className="rounded-full w-6" src={`/storage/`+user.image} alt="avatar profile"/>
                    </div>
                    <span className={`hidden ${!isSearchOpen && "lg:inline"} ${isSearchOpen && "hidden"} origin-left duration-250`}>{children}</span>
                </>)
            }
        </Link>
    );
}
