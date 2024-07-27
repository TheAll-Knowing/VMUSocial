import {Link} from "@inertiajs/react";
import moment from "moment/moment.js";

export default function NotificationBar({isNotificationOpen,notifications}) {
    return (
        <div
            className={`${!isNotificationOpen && "scale-x-0"} origin-left duration-200 w-96 h-screen rounded-r-2xl border-r ${isNotificationOpen && "border-l"} top-0 flex flex-col fixed left-20 z-[1] bg-white`}>
            <div className="p-5 pt-6">
                <span className="text-2xl font-semibold">Notifications</span>
            </div>
            <div className="mt-4 h-[90%] overflow-y-auto">
                {
                    notifications.map((notification) => (
                        notification.type === 'userFollow-notification' &&
                        (
                            <Link href={route('profile.show', notification.data.user_username)} key={notification.id}>
                                <div className="px-6 py-2 flex flex-row items-center hover:bg-igSecondaryBackground">
                                    <div className="mr-[14px] shrink-0">
                                        <img src={`/storage/` + notification.data.user_image}
                                             alt="User Image"
                                             className="w-11 h-11 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="grow">
                                        <p className="text-sm"><span
                                            className="font-semibold">{notification.data.user_username}</span> started
                                            following you. <span
                                                className="text-igSecondaryText">{moment(notification.created_at).fromNow()}</span>
                                        </p>
                                    </div>
                                    <div className="shrink-0 ml-3">
                                        <button
                                            className="text-white text-sm bg-igPrimaryButton rounded-lg px-4 py-[7px] font-bold z-10 hover:bg-igPrimaryButtonHover">Follow
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ) || notification.type === 'likePost-notification' && (
                            <Link href={route('post.show', notification.data.post_id)} key={notification.id}>
                                <div className="px-6 py-2 flex flex-row items-center hover:bg-igSecondaryBackground">
                                    <div className="mr-[14px] shrink-0">
                                        <img src={`/storage/` + notification.data.user_image}
                                             alt="User Image"
                                             className="w-11 h-11 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="grow">
                                        <p className="text-sm"><span
                                            className="font-semibold">{notification.data.user_username}</span> liked
                                            your
                                            post. <span
                                                className="text-igSecondaryText">{moment(notification.created_at).fromNow()}</span>
                                        </p>
                                    </div>
                                    <div className="shrink-0 ml-3">
                                        <img
                                            src={`/storage/` + notification.data.post_image}
                                            alt=""
                                            className="w-11 h-11 object-cover rounded-lg"/>
                                    </div>
                                </div>
                            </Link>
                        ) || notification.type === 'commentPost-notification' && (
                            <Link href={route('post.show', notification.data.post_id)} key={notification.id}>
                                <div className="px-6 py-2 flex flex-row items-center hover:bg-igSecondaryBackground">
                                    <div className="mr-[14px] shrink-0">
                                        <img src={`/storage/` + notification.data.user_image}
                                             alt="User Image"
                                             className="w-11 h-11 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="grow">
                                        <p className="text-sm"><span
                                            className="font-semibold">{notification.data.user_username}</span> commented
                                            your
                                            post. <span
                                                className="text-igSecondaryText">{moment(notification.created_at).fromNow()}</span>
                                        </p>
                                    </div>
                                    <div className="shrink-0 ml-3">
                                        <img
                                            src={`/storage/` + notification.data.post_image}
                                            alt=""
                                            className="w-11 h-11 object-cover rounded-lg"/>
                                    </div>
                                </div>
                            </Link>
                        )
                    ))
                }
            </div>
        </div>
    );
}
