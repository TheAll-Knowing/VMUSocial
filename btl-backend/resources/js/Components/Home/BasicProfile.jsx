import {Link} from "@inertiajs/react";

export default function BasicProfile(props) {
    const {user} = props;
    return (
        <>
            <div className="flex flex-row">
                <Link href={route('profile.show', user.username)}>
                    <img className="rounded-full" src={`/storage/` + user.image} alt="" width="80px"/>
                </Link>
                <div className="w-72 pl-2 m-auto">
                    <div className="text-sm font-medium">
                        <Link href={route('profile.show', user.username)}>{user.username}</Link>
                    </div>
                    <div className="text-gray-500 text-sm">
                        {user.name}
                    </div>
                </div>
                <div className="w-32 text-right m-auto">
                    <Link href={route('logout')} method="post" as="button"
                          className="text-xs text-sky-500 font-bold cursor-pointer hover:text-sky-900">Sign Out</Link>
                </div>
            </div>
        </>
    );
}
