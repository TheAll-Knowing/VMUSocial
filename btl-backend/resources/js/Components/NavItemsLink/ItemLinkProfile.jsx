import { Link } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ItemLink({ active = false, className = '',user, children, ...props }) {
    return (
        <Link
            {...props}
            className={'flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100' + className}>
            {active ? (<>
                    <div className="text-2xl">
                        <img className="rounded-full w-6 border-2 border-black border-solid" src={`/storage/`+user.image} alt="avatar profile"/>
                    </div>
                    <span className={`hidden text-lg font-bold lg:inline origin-left duration-250`}>{children}</span>
                </>)
                : (<>
                    <div className="text-2xl">
                        <img className="rounded-full w-6" src={`/storage/`+user.image} alt="avatar profile"/>
                    </div>
                    <span className={`hidden lg:inline origin-left duration-250`}>{children}</span>
                </>)
            }
        </Link>
    );
}
