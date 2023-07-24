import img from "/public/images/tx8oe0m8c2ka1.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ModalPostActions from "@/Components/ModalPostActions.jsx";
import {useState} from "react";
import ModalPost from "@/Components/ModalPost.jsx";
import moment from "moment";
import {isLikedByUser} from "@/Components/Helpers.jsx";
import {useForm} from "@inertiajs/react";
export default function Post(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const {
        id,
        currentUserId,
        caption,
        image,
        username,
        userImage,
        likes,
        comments,
        postLikes,
        time,
        post,
    } = props;
    const { data, setData, processing, reset } = useForm({
        comment: '',
        postId: id,
    });
    const likePost = async () => {
        try {
            const response = await axios.post(route('post.like'), {id})
            setLiked(!liked)
            setLikeCount(likeCount + 1);
        } catch (error) {
            console.log("error:", error);
        }
    };
    const unLikePost = async () => {
        try {
            const response = await axios.post(route('post.unlike'), {id})
            setLiked(!liked)
            if (initialLike) {setLikeCount(likeCount - 1)}
            else {setLikeCount(likes)}
        } catch (error) {
            console.log("error:", error);
        }
    };
    const commentPost = async () => {
        try {
            const cmt = data.comment;
            const response = await axios.post(route('post.comment'), {id,cmt})
            reset('comment');
            setCommentCount(commentCount + 1);
        } catch (error) {
            console.log("error:", error);
        }
    };
    const [likeCount, setLikeCount] = useState(likes);
    const [liked, setLiked] = useState(isLikedByUser(currentUserId, postLikes));
    const initialLike = isLikedByUser(currentUserId, postLikes);
    const [commentCount, setCommentCount] = useState(comments.length);

    return(
        <>
            <ModalPostActions
                open={isModalOpen}
                setOpen={setIsModalOpen}>
            </ModalPostActions>
            <ModalPost
                open={isPostModalOpen}
                setOpen={setIsPostModalOpen}
                post={post}
                currentUserId={currentUserId}
            >
            </ModalPost>
            <div className="border rounded-lg border-slate-200 mb-5 bg-white">
                <div className="p-3 flex flex-row">
                    <div className="flex-1">
                        <a href={route('profile.show', username)}>
                            <img className="rounded-full w-8 inline" src={`/storage/`+userImage} alt=""/>
                            <span className="font-medium text-sm ml-2">
                                {username}
                            </span>
                        </a>
                    </div>
                    <div className="cursor-pointer">
                        <a onClick={() => setIsModalOpen(true)}>
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                        </a>
                    </div>
                </div>
                <img src={`/storage/`+image}
                     alt="Post photo"
                     className="w-100"
                />
                <div className="p-3 flex flex-row text-xl">
                    <div className="flex-1">
                        <a onClick={liked ? () => unLikePost() : () => likePost()}
                           className={`mr-4 ${liked ? 'text-red-600' : 'hover:text-gray-600'} cursor-pointer`}>
                            <FontAwesomeIcon icon={[liked ? "fas" : "far", "fa-heart"]} />
                        </a>
                        <a onClick={() => setIsPostModalOpen(true)} className="mr-4 hover:text-gray-600 cursor-pointer">
                            <FontAwesomeIcon icon={["far", "fa-comment"]} />
                        </a>
                        <a href="" className="hover:text-gray-600 cursor-pointer">
                            <FontAwesomeIcon icon={["far", "fa-paper-plane"]} />
                        </a>
                    </div>
                    <div className="">
                        <a href="" className="hover:text-gray-600 cursor-pointer">
                            <FontAwesomeIcon icon={["far", "fa-bookmark"]} />
                        </a>
                    </div>
                </div>
                <div className="font-medium text-sm px-3">{likeCount} likes</div>
                <div className="px-3 mt-1.5 text-sm">
                    <span className="font-medium">{username}</span> {caption}
                </div>
                <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-2">
                    {moment(time).fromNow()}
                </div>
                {comments.length ? (
                    <a onClick={()=>setIsPostModalOpen(true)}
                       className="block text-gray-500 px-3 py-2 text-sm cursor-pointer"
                    >
                    View all { commentCount } comments
                    </a>
                ): ("")
                }
                <div className="flex flex-row border-t items-center">
                    <div className="flex-1 py-1">
                        <input
                            id="comment"
                            name="comment"
                            type="text"
                            value={data.comment}
                            onChange={(e) => setData('comment', e.target.value)}
                            className="w-full py-1 text-sm border-0 focus:ring-0"
                            placeholder="Add a comment..."
                            required
                        />
                    </div>
                        <div className="pr-2.5">
                            <button onClick={() => commentPost()} className={`text-sky-500 ${processing && 'opacity-25'} hover:text-gray-800 font-medium cursor-pointer`} disabled={processing}>Post</button>
                            <a href="" className="ml-2 text-lg">
                                <FontAwesomeIcon icon={["far", "fa-face-smile"]}></FontAwesomeIcon>
                            </a>
                        </div>

                </div>
            </div>
        </>
    );
}
