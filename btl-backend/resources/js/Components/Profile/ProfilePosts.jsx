import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfilePost from "@/Components/Profile/ProfilePost.jsx";
export default function ProfilePosts({currentUser, user,posts, followers, following}) {
    return(
        <>
            <ul className="flex flex-row p-2 text-sm items-center justify-center border-t text-gray-400 h-16 md:hidden">
                <li className="flex-1 text-center">
                    <strong className="text-black block">{posts.length}</strong> posts
                </li>
                <li className="flex-1 text-center">
                    <strong className="text-black block">{followers.length}</strong> followers
                </li>
                <li className="flex-1 text-center">
                    <strong className="text-black block">{following.length}</strong> following
                </li>
            </ul>
            <div className="flex flex-row text-2xl items-center lg:justify-center border-t uppercase
             text-gray-500 tracking-widest h-16 lg:text-xs">
                <a href=""
                   className="w-full lg:w-auto text-black border-t border-black  flex justify-center items-center h-full lg:mr-16 cursor-pointer">
                    <FontAwesomeIcon icon="fa-solid fa-table-cells" />
                    <span className="hidden ml-2 lg:inline-block">posts</span>
                </a>
                <a
                   className="w-full lg:w-auto flex justify-center items-center h-full lg:mr-16 cursor-pointer">
                    <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
                    <span className="hidden ml-2 lg:inline-block">reels</span>
                </a>
                <a
                   className={`${currentUser.id === user.id ? "" : "hidden"} w-full lg:w-auto flex justify-center items-center h-full lg:mr-16 cursor-pointer`}>
                    <FontAwesomeIcon icon="fa-regular fa-bookmark" />
                    <span className="hidden ml-2 lg:inline-block">saved</span>
                </a>
                <a
                   className="w-full lg:w-auto flex justify-center items-center h-full lg:mr-16 cursor-pointer">
                    <FontAwesomeIcon icon="fa-solid fa-user-tag" />
                    <span className="hidden ml-2 lg:inline-block">tagged</span>
                </a>
            </div>

            <div className="grid grid-cols-3 gap-1">
                {posts.map((post) => (
                    <ProfilePost key={post.id}
                                 currentUser={currentUser}
                                 post={post}
                    >
                    </ProfilePost>
                ))}
            </div>
        </>
    )
}
