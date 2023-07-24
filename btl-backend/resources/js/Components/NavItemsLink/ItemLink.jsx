import { Link } from '@inertiajs/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ItemLink({ active = false, className = '',ic, children, ...props }) {
    return (
        <Link
            {...props}
            className={'flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100' + className}>
            {active ? (<>
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={ic} />
                        </div>
                        <span className={`hidden text-lg font-bold lg:inline origin-left duration-250`}>{children}</span>
                      </>)
                    : (<>
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={ic} />
                        </div>
                        <span className={`hidden lg:inline origin-left duration-250`}>{children}</span>
                      </>)
            }
        </Link>
    );
}
