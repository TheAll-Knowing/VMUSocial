import {useState} from "react";
import {isFollowedByUser} from "@/Components/Helpers.jsx";
import {usePage} from "@inertiajs/react";

export default function FollowSuggestion({id}) {
    const [followed, setFollowed] = useState(false);
    const followUser = async () => {
        try {
            const response = await axios.post(route('user.follow'), {id})
            setFollowed(!followed)
        } catch (error) {
            console.log("error:", error);
        }
    };
    const unFollowUser = async () => {
        try {
            const response = await axios.post(route('user.unfollow'), {id})
            setFollowed(!followed)
        } catch (error) {
            console.log("error:", error);
        }
    };
    return(
        <>
            {!followed && (
                <a onClick={() => followUser()}
                   className="text-xs text-sky-500 font-bold hover:text-sky-900 cursor-pointer">Follow</a>
            )}
            {followed && (
                <a onClick={() => unFollowUser()}
                   className="text-xs font-bold hover:text-gray-500 cursor-pointer">Following</a>
            )}
        </>
    );
}
