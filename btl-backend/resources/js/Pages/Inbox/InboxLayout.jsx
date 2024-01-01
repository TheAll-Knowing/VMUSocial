import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ChatUser from "@/Components/Inbox/ChatUser.jsx";
import {useEffect, useState} from "react";

export default function InboxLayout({auth, users, children}) {
    const [status, setStatus] = useState([]);
    useEffect(() => {
        users.map((user) => {
            setStatus(status=> [
                ...status,
                { id: user.id, last: 'Offline' }
            ]);
        })
    }, []);
    Echo.join('status-update')
        .here((users)=>{
            users.map((user) => {
                if (auth.user.id !== user.id) {
                    setStatus(status.map(el => {
                        if (el.id === user.id) {
                            // Create a *new* object with changes
                            el.last = 'Active now';
                        }
                            // No changes
                            return el;
                    }))
                }
            })
        })
        .joining((user)=>{
            setStatus(status.map(el => {
                if (el.id === user.id) {
                    // Create a *new* object with changes
                    return { ...el, last: 'Active now' };
                } else {
                    // No changes
                    return el;
                }
            }));
        })
        .leaving((user)=>{
            setStatus(status.map(el => {
                if (el.id === user.id) {
                    // Create a *new* object with changes
                    return { ...el, last: 'Offline' };
                } else {
                    // No changes
                    return el;
                }
            }));
        })
        .listen('UserStatusEvent',(e)=>{
            // console.log('hh'+e);
        });
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
                            {users.map((user) => (
                                <ChatUser key={user.id}
                                          id={user.id}
                                          username={user.username}
                                          name={user.name}
                                          userImage={user.image}
                                          stt={status}
                                >
                                </ChatUser>
                            ))}
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
