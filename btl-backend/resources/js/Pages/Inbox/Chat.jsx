import InboxLayout from "@/Pages/Inbox/InboxLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthenticatedLayout_Inbox from "@/Layouts/AuthenticatedLayout_Inbox.jsx";
import {Head} from "@inertiajs/react";

export default function Chat({users, user, auth}) {
    return (
        <>
            <div className="flex">
                <AuthenticatedLayout_Inbox
                    user={auth.user}
                >
                    <Head title="VMUSocial" />
                </AuthenticatedLayout_Inbox>
                <InboxLayout auth={auth} users={users}>
                    <div className="flex flex-col h-full">
                        <div className="min-h-[75px] h-[75px] flex flex-row items-center px-4 border-b">
                            <div className="flex flex-row items-center grow">
                                <div className="p-1.5">
                                    <a href="">
                                        <span className="h-11 w-11 rounded-full">
                                            <img className="inline object-cover rounded-full h-11 w-11" src={`/storage/` + user.image} alt=""/>
                                        </span>
                                    </a>
                                </div>
                                <div className="p-1.5">
                                    <a href="">
                                        <div className="w-fit max-w-full flex flex-col gap-1">
                                            <span className="text-base leading-5 font-semibold">Nguyễn Thành Nam</span>
                                            <span className="text-xs leading-4 font-normal text-[#737373]">Active 35m ago</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex pl-3">
                                <div className="p-2">
                                    <div className="cursor-pointer">
                                        <FontAwesomeIcon icon="fa-solid fa-phone" size="lg" />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="cursor-pointer">
                                        <FontAwesomeIcon icon="fa-solid fa-video" size="lg" />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="cursor-pointer">
                                        <FontAwesomeIcon icon="fa-solid fa-circle-info" size="lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </InboxLayout>
            </div>
        </>
    );
}
