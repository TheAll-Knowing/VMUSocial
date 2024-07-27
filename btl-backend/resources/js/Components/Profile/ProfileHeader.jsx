import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, usePage} from "@inertiajs/react";
import {useState} from "react";
import {isFollowedByUser} from "@/Components/Helpers.jsx";
export default function ProfileHeader({setIsSettingsModalOpen, user, posts, followers, following}) {
    const currentUser = usePage().props.auth.user;
    const [followerCount, setFollowerCount] = useState(followers.length);
    const [followed, setFollowed] = useState(isFollowedByUser(currentUser.id, followers));
    const followUser = async () => {
        try {
            const id = user.id;
            const response = await axios.post(route('user.follow'), {id})
            setFollowed(!followed)
            setFollowerCount(followerCount + 1)
        } catch (error) {
            console.log("error:", error);
        }
    };
    const unFollowUser = async () => {
        try {
            const id = user.id;
            const response = await axios.post(route('user.unfollow'), {id})
            setFollowed(!followed)
            setFollowerCount(followerCount - 1)
        } catch (error) {
            console.log("error:", error);
        }
    };
    return(
        <>
            <div className="grid grid-cols-3 mb-5">
                <div className="bg-green p-3 rounded flex items-start justify-center">
                    <img src={`/storage/`+user.image}
                         alt="Avatar"
                         className="rounded-full"
                         width="150"/>
                </div>
                <div className="p-3 text-black col-span-2">
                    <div className="flex items-center">
                        <h1 className="inline-block text-xl align-bottom">
                            {user.username}
                        </h1>
                        <a
                            onClick={followed ? () => unFollowUser() : () => followUser()}
                            className={`${currentUser.id === user.id ? "hidden" : ""} bg-gray-100 ml-4 font-semibold py-1 px-2 rounded-lg text-md hover:bg-gray-200 cursor-pointer`}>
                            <span className={`${followed ? "hidden" : ""} text-sm`}>Follow</span>
                            <span className={`${followed ? "" : "hidden"} text-sm`}>Unfollow</span>
                        </a>
                        <Link
                            href={route('profile.edit')} className={`${currentUser.id === user.id ? "" : "hidden"} bg-gray-100 ml-4 font-semibold py-1 px-2 rounded-lg text-md hover:bg-gray-200`}>
                            <span className="text-sm">Edit profile</span>
                        </Link>
                        <a className={`${currentUser.id === user.id ? "" : "hidden"} ml-4 cursor-pointer`} onClick={() => setIsSettingsModalOpen(true)}>
                            <FontAwesomeIcon icon="fa-solid fa-gear" size="xl" />
                        </a>
                    </div>
                    <div className="flex-row py-5 max-w-sm hidden md:flex">
                        <div className="basis-1/3">
                            <strong>{posts.length}</strong> posts
                        </div>
                        <div className="basis-1/3">
                            <strong>{followerCount}</strong> followers
                        </div>
                        <div className="basis-1/3">
                            <strong>{following.length}</strong> following
                        </div>
                    </div>
                    <h6 className="text-sm font-bold">{user.name}</h6>
                    <div className="text-sm whitespace-break-spaces">{user.bio}</div>
                    <a href={user.website}
                       target="_blank"
                       className="text-sm text-blue-700 font-bold">
                        {user.website}
                    </a>
                </div>
            </div>
        </>
    );
}
