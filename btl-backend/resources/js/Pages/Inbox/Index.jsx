import AuthenticatedLayout_Inbox from "@/Layouts/AuthenticatedLayout_Inbox.jsx";
import {Head} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Index({ auth, user}) {
    return (
        <>
                <div className="flex">
                    <AuthenticatedLayout_Inbox
                        user={auth.user}
                    >
                        <Head title="VMUSocial" />
                    </AuthenticatedLayout_Inbox>
                    <div className="w-[calc(100%-80px)] ml-auto">
                        <div className="h-screen flex flex-row flex-nowrap justify-start grow">
                            <div className="max-w-[398px] w-full min-h-full flex flex-col border-r-[1px] relative shrink-0">
                                <div className="h-[75px] w-full pb-3 pt-9 px-6 flex flex-row items-center justify-between">
                                    <div className="">
                                        <span className="block text-xl font-bold leading-[25px]">xingqiu.ishere</span>
                                    </div>
                                    <div className="pl-3">
                                        <div className="p-2">
                                            <FontAwesomeIcon icon="fa-regular fa-pen-to-square" size="xl"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3 5 px-6 pb-2.5 flex flex-row items-center justify-start">
                                    <div className="grow">
                                        <h1 className="text-base leading-[20px] font-bold">Messages</h1>
                                    </div>
                                </div>
                                <div className="flex flex-col overflow-y-auto">
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/331124940_1403019600509378_6735128377955552032_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=rZRwxQFrGF0AX-fLqeX&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfBUOtdzSnQfYK_Llo67CDW13pnIIMjGqrgISHu2_0-R3Q&amp;oe=657F226B"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="py-2 px-6 cursor-pointer hover:bg-gray-50">
                                            <div className="w-[350px] flex flex-nowrap items-center justify-start">
                                                <div className="max-w-full shrink-0">
                                                    <div className="pr-3">
                                                        <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src="https://scontent.cdninstagram.com/v/t51.2885-19/221204078_4547147095319618_8002562029391584807_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=r1hdNkto6_kAX8WhT8S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAFJnt0VBgr8m03QiQFaiWuDHUHJjWxC00P3o4xz0N7lA&oe=657EC6CD"
                                                    />
                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-auto grow">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-[224px]">
                                                            <span className="block text-sm leading-[18px] font-normal">Nguyễn Thành Nam</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <span className="block text-xs text-[#737373] leading-4 font-normal">Active 10h ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">111</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
