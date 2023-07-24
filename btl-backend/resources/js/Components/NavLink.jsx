import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={'flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100' + className}>
            {active ? (<>
                        <div className="text-2xl">
                            <i className="bi bi-house-door-fill"></i>
                        </div>
                        <span className={`hidden text-lg md:inline origin-left duration-250`}>{children}</span>
                      </>)
                    : (<>
                        <div className="text-2xl">
                            <i className="bi bi-house-door"></i>
                        </div>
                        <span className={`hidden md:inline origin-left duration-250`}>{children}</span>
                      </>)
            }
        </Link>
    );
}
