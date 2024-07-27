import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ChatUser from "@/Components/Inbox/ChatUser.jsx";
import {useContext, useState} from "react";
import {MessageContext} from "@/Layouts/AuthenticatedLayout.jsx"

export default function InboxLayout({users, children, status, userInboxId}) {
    const {unReadMessage, setUnReadMessage} = useContext(MessageContext);

    return (
        <>
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
                            {users.map((user) => {
                                const message = unReadMessage.find(message => message.sender_id === user.id);
                                const hasMessage = Boolean(message);
                                return (
                                    <ChatUser key={user.id}
                                              id={user.id}
                                              username={user.username}
                                              name={user.name}
                                              userImage={user.image}
                                              stt={status}
                                              userInboxId={userInboxId}
                                              message={hasMessage ? message.data.message : null}
                                              timeMessage={hasMessage ? message.created_at : null}
                                    >
                                    </ChatUser>
                                );
                            })}
                        </div>
                    </div>
                    <div className="grow">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
