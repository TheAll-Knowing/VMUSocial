import { Link } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ItemLink({ active = false, className = '',ic, children, isSearchOpen, isNotificationOpen, isChat, ...props }) {
    return (
        <Link
            {...props}
            className={'flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100' + className}>
            {active ? (<>
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={ic} />
                        </div>
                        <span className={`hidden ${!isSearchOpen && !isNotificationOpen && "lg:inline"} ${(isSearchOpen || isNotificationOpen) && "hidden"} text-lg font-bold origin-left duration-250`}>{children}</span>
                      </>)
                    : (<>
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={ic} />
                        </div>
                        <span className={`hidden ${!isSearchOpen && !isNotificationOpen && !isChat && "lg:inline"} ${(isSearchOpen || isNotificationOpen) && "hidden"} origin-left duration-250`}>{children}</span>
                      </>)
            }
        </Link>
    );
}
