import {Head} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment/moment.js";
import Footer from "@/Components/Profile/Footer.jsx";
import NavbarGuestLayout from "@/Layouts/NavbarGuestLayout.jsx";
export default function Index({post}) {
    return (
        <>
            <NavbarGuestLayout>
                <Head title={post.caption} />
            </NavbarGuestLayout>
            <div className="container lg:p-8 max-w-5xl">
                <div className="flex flex-row h-5/6 max-h-[40rem]">
                    <div className="w-3/5 bg-black flex items-center">
                        <img src={`/storage/`+post.image} alt=""/>
                    </div>
                    <div className="w-2/5 relative pt-16">
                        <div className="absolute top-0 w-full p-3 flex flex-row border-b">
                            <div className="flex-1">
                                <a >
                                    <img className="rounded-full w-8 max-w-none inline" src={`/storage/`+post.user.image} alt=""/>
                                    <span className="font-medium text-sm ml-2">
                                {post.user.username}
                            </span>
                                </a>
                            </div>
                            <div className="cursor-pointer">
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                            </div>
                        </div>
                        <div className="overflow-y-scroll h-full pb-40">
                            <div className="flex flex-row p-3">
                                <div>
                                    <img className="rounded-full w-8 max-w-none inline"
                                         src={`/storage/`+post.user.image} alt=""/>
                                </div>
                                <div>
                                    <div className="px-3 text-sm">
                                    <span className="font-medium mr-2">
                                        {post.user.username}
                                    </span>
                                        {post.caption}
                                    </div>
                                </div>
                            </div>
                            {post.comments && post.comments.map((comment, index) => (
                                <div className="flex flex-row p-3" key={comment.id}>
                                    <a href={route('profile.show', comment.user.username)}>
                                        <img src={`/storage/`+comment.user.image}
                                             className="rounded-full w-8 max-w-none inline"
                                             alt=""/>
                                    </a>
                                    <div className="grow relative">
                                        <div className="px-4 text-sm">
                                            <a href={route('profile.show', comment.user.username)} className="font-medium mr-2">
                                                {comment.user.username}
                                            </a>
                                            {comment.comment}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-0 w-full border-t bg-white">
                            <div className="p-3 flex flex-row text-2xl w-full">
                                <div className="flex-1">
                                    <a href={route('login')}
                                       className={`mr-4 cursor-pointer`}>
                                        <FontAwesomeIcon icon={["far", "fa-heart"]} />
                                    </a>
                                    <a href={route('login')} className="mr-4 hover:text-gray-600 cursor-pointer">
                                        <FontAwesomeIcon icon={["far", "fa-comment"]} />
                                    </a>
                                    <a href={route('login')} className="hover:text-gray-600 cursor-pointer">
                                        <FontAwesomeIcon icon={["far", "fa-paper-plane"]} />
                                    </a>
                                </div>
                                <div>
                                    <a href={route('login')} className="hover:text-gray-600 cursor-pointer">
                                        <FontAwesomeIcon icon={["far", "fa-bookmark"]} />
                                    </a>
                                </div>
                            </div>
                            <div className="font-medium text-sm px-3">
                                { post.likes.length } likes
                            </div>
                            <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
                                {moment(post.created_at).fromNow()}
                            </div>
                            <div className="p-2 pl-3 flex flex-row border-t">
                                <span className="text-sm">
                                    <a href={route('login')} className="text-sky-600">Log in</a> to like or comment.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
