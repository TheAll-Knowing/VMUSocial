import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function ProfilePostGuest(props) {
    const [showOverlay, setShowOverlay] = useState(false);
    const {post} = props;
    return(
        <>
            <div className="relative overflow-hidden w-full pt-[100%]"
                 onMouseEnter={() => setShowOverlay(true)}>
                <a
                    href={route('/')}
                >
                    <div className={`bg-gray-800 bg-opacity-50 h-full w-full absolute " +
                        " inset-0 z-10 flex items-center justify-center text-white ${showOverlay ? "" : "hidden"}`}
                         onMouseLeave={() => setShowOverlay(false)}>
                        <FontAwesomeIcon icon={["fas", "fa-heart"]} />
                        <span className="ml-2">{post.likes_count}</span>
                        <FontAwesomeIcon icon={["fas", "fa-comment"]} className="ml-7" />
                        <span className="ml-2">{post.comments.length}</span>
                    </div>
                </a>
                <img src={`/storage/`+post.image}
                     alt="post image"
                     className="absolute inset-0 object-cover w-full h-full"/>
            </div>
        </>
    )
}
