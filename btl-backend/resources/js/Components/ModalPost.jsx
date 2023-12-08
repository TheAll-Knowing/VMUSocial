import Modal from "@/Components/Modal.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment/moment.js";
import {isLikedByUser} from "@/Components/Helpers.jsx";
import {useRef, useState} from "react";
import {useForm} from "@inertiajs/react";
export default function ModalPost(props) {
    const {open, setOpen, post, currentUserId} = props;
    if (!post) {
        return;
    }
    const [liked, setLiked] = useState(isLikedByUser(currentUserId, post.likes));
    const ref = useRef(null);
    const { data, setData, post:postt, processing, reset } = useForm({
        comment: '',
        postId: post.id,
    });
    const handleClick = () => {
        ref.current.focus();
    };
    const likePost = async () => {
        try {
            postt(route('post.like'),{
                preserveScroll: true,
            });
            setLiked(!liked);
        } catch (error) {
            console.log("error:", error);
        }
    };
    const unLikePost = async () => {
        try {
            postt(route('post.unlike'),{
                preserveScroll: true,
            });
            setLiked(!liked);
        } catch (error) {
            console.log("error:", error);
        }
    };
    const commentPost = async () => {
        try {
            postt(route('post.comment'),{
                preserveScroll: true,
            });
            reset('comment');
        } catch (error) {
            console.log("error:", error);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            try {
                postt(route('post.comment'),{
                    preserveScroll: true,
                });
                reset('comment');
            } catch (error) {
                console.log("error:", error);
            }
        }
    };
    return(
        <>
            <Modal open={open} setOpen={setOpen} size="lg">
                <div className="flex flex-row h-full">
                    <div className="w-3/5 bg-black flex items-center">
                        <img src={`/storage/`+post.image} alt=""/>
                    </div>
                    <div className="w-2/5 relative pt-16">
                        <div className="absolute top-0 w-full p-3 flex flex-row border-b">
                            <div className="flex-1">
                                    <a href={route('profile.show', post.user.username)}>
                                        <img className="rounded-full w-8 max-w-none inline" src={`/storage/`+post.user.image} alt="avt"/>
                                    </a>
                                    <a href={route('profile.show', post.user.username)} className="ml-3">
                                        <span className="font-medium text-sm hover:text-gray-500">
                                            {post.user.username}
                                        </span>
                                    </a>
                            </div>
                            <div className="cursor-pointer">
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                            </div>
                        </div>
                            <div className="overflow-scroll scrollbar-hide h-full pb-48">
                                <div className="flex flex-row p-3">
                                    <div>
                                        <a href={route('profile.show', post.user.username)}>
                                            <img className="rounded-full w-8 max-w-none inline"
                                                 src={`/storage/`+post.user.image} alt=""/>
                                        </a>
                                    </div>
                                    <div>
                                        <div className="px-3 text-sm">
                                            <a href={route('profile.show', post.user.username)}>
                                                <span className="font-medium hover:text-gray-500">
                                                    {post.user.username}
                                                </span>
                                            </a>
                                            <span className="ml-2">{post.caption}</span>
                                        </div>
                                    </div>
                                </div>
                                {post.comments && post.comments.map((comment) => (
                                    <div className="flex flex-row p-3" key={comment.id}>
                                        <div>
                                            <a href={route('profile.show', comment.user.username)}>
                                                <img src={`/storage/`+comment.user.image}
                                                     className="rounded-full w-8 max-w-none inline"
                                                     alt=""/>
                                            </a>
                                        </div>
                                        <div className="grow relative">
                                            <div className="px-4 text-sm">
                                                <a href={route('profile.show', comment.user.username)}>
                                                    <span className="font-medium hover:text-gray-500">
                                                        {comment.user.username}
                                                    </span>
                                                </a>
                                                <span className="ml-2">{comment.comment}</span>
                                            </div>
                                            <a
                                               className="absolute top-0 right-0 block float-right text-xs cursor-pointer">
                                                <FontAwesomeIcon icon={["far", "fa-heart"]} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 w-full border-t bg-white">
                                <div className="p-3 flex flex-row text-2xl w-full">
                                    <div className="flex-1">
                                        <a onClick={liked ? () => unLikePost() : () => likePost()}
                                           className={`mr-4 ${liked ? 'text-red-600' : 'hover:text-gray-600'} cursor-pointer`}>
                                            <FontAwesomeIcon icon={[liked ? "fas" : "far", "fa-heart"]} />
                                        </a>
                                        <a onClick={handleClick} className="mr-4 hover:text-gray-600 cursor-pointer">
                                            <FontAwesomeIcon icon={["far", "fa-comment"]} />
                                        </a>
                                        <a className="hover:text-gray-600 cursor-pointer">
                                            <FontAwesomeIcon icon={["far", "fa-paper-plane"]} />
                                        </a>
                                    </div>
                                    <div>
                                        <a className="hover:text-gray-600 cursor-pointer">
                                            <FontAwesomeIcon icon={["far", "fa-bookmark"]} />
                                        </a>
                                    </div>
                                </div>
                                <div className="font-medium text-sm px-3">
                                    { post.likes_count } likes
                                </div>
                                <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
                                    {moment(post.created_at).fromNow()}
                                </div>
                                <div className="p-3 flex flex-row border-t">
                                    <div className="flex items-center">
                                        <a className="text-2xl cursor-pointer">
                                            <FontAwesomeIcon icon={["far", "fa-face-smile"]}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                    <div className="flex-1 px-3 py-1">
                                        <input type="text"
                                               className="w-full px-3 py-1 text-sm outline-0 border-0 focus:ring-0"
                                               ref={ref}
                                               id="comment"
                                               name="comment"
                                               value={data.comment}
                                               onChange={(e) => setData('comment', e.target.value)}
                                               onKeyDown={handleKeyDown}
                                               placeholder="Add a comment..."
                                               required
                                        />
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <button onClick={() => commentPost()} className="text-sky-500 font-medium hover:text-gray-800">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
