import InboxContainer from "@/Pages/Inbox/InboxContainer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "@inertiajs/react";
import {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import {MessageContext} from "@/Layouts/AuthenticatedLayout.jsx";

const Chat = ({users, user, auth, chats}) => {
    const currentUserId = auth.user.id;
    const receiverId = user.id;
    const channelName = currentUserId < receiverId ? `${currentUserId}-${receiverId}` : `${receiverId}-${currentUserId}`;

    const [chatStorage, setChatStorage] = useState(chats);
    const [chatValue, setChatValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);
    const {unReadMessage, setUnReadMessage} = useContext(MessageContext);

    const connectChat = () => {
        let timer;
        const channelChat = Echo.private(`chat.${channelName}`)
            .listen('.ChatCreated', (e) => {
                markMessageRead();
                setChatStorage((prev) => [...prev, e.model]);
            })
            .listenForWhisper('typing', (e) => {
                setIsTyping(e.typing);
                // This will clear previous timer that will make your typing status
                clearTimeout(timer);
                // remove is typing indicator after 0.9s
                timer = setTimeout(function() {
                    setIsTyping(false);
                }, 600);
            });
        return channelChat;
    }

    const markMessageNotificationsRead = async () => {
        try {
            await axios.post(route('markMessageRead'), {
                sender_id: receiverId,
            })
        }
        catch (error) {
            console.error(error);
        }
    }
    const markMessageRead = async () => {
        await markMessageNotificationsRead();
        setUnReadMessage(unReadMessage.filter(msg => msg.sender_id !== receiverId));
    }
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatStorage, isTyping]);
    useEffect(() => {
        connectChat();
        markMessageRead();
        return () => {
            Echo.leave(`chat.${channelName}`);
        };
    }, [receiverId]);

    function submit(e) {
        e.preventDefault();
        if (chatValue === '') {
            return;
        }
        else sendChat();
        setChatValue('');
    }
    const sendChat = async () => {
        try {
            const response  = await axios.post('/direct/chat',{
                user_id: auth.user.id,
                receiver_id: user.id,
                message: chatValue,
            })
            setChatStorage((prev) => [...prev, response.data]);
        }
        catch (error) {
            console.log(error);
        }
    }

    const checkTyping = () => {
        const channelType = Echo.private(`chat.${channelName}`);

        setTimeout(function() {
            channelType.whisper('typing', {
                user: auth.user,
                typing: true
            });
        }, 300);
    }
    return (
        <>
            <div className="flex flex-col h-screen overflow-y-scroll">
                <div className="min-h-[75px] basis-[75px] flex flex-row items-center px-4 border-b">
                    <div className="flex flex-row items-center grow">
                        <div className="p-1.5">
                            <Link href={route('profile.show', user.username)}>
                                        <span className="h-11 w-11 rounded-full">
                                            <img className="inline object-cover rounded-full h-11 w-11"
                                                 src={`/storage/` + user.image} alt=""/>
                                        </span>
                            </Link>
                        </div>
                        <div className="p-1.5">
                            <Link href={route('profile.show', user.username)}>
                                <div className="w-fit max-w-full flex flex-col gap-1">
                                    <span className="text-base leading-5 font-semibold">{user.name}</span>
                                    <span className="text-xs leading-4 font-normal text-[#737373]">Active 35m ago</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex pl-3">
                        <div className="p-2">
                            <div className="cursor-pointer">
                                <FontAwesomeIcon icon="fa-solid fa-phone" size="lg"/>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="cursor-pointer">
                                <FontAwesomeIcon icon="fa-solid fa-video" size="lg"/>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="cursor-pointer">
                                <FontAwesomeIcon icon="fa-solid fa-circle-info" size="lg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full max-h-[calc(100vh-75px)]">
                    <div className="overflow-y-auto flex-1" ref={scrollRef}>
                        {chatStorage.map((chat, index) => (
                            chat.user_id === auth.user.id ? (
                                <div key={index} className="pt-2.5 pb-2 flex flex-row justify-end mr-4">
                                    <div className="rounded-2xl bg-[#4e92ec] px-3 py-[6px] max-w-96">
                                        <span className="text-base text-white break-words">{chat.message}</span>
                                    </div>
                                </div>
                            ) : (
                                <div key={index} className="pt-2.5 pb-2 flex flex-row">
                                    <div className="pl-[14px] pr-2 self-end">
                                        <div className="w-[28px] h-[28px]">
                                            <img className="rounded-full object-cover"
                                                 src={`/storage/` + user.image}
                                                 alt="User Image"
                                            />
                                        </div>
                                    </div>
                                    <div className="rounded-2xl bg-[#efefef] px-3 py-[6px] max-w-96">
                                        <span className="text-base break-words">{chat.message}</span>
                                    </div>
                                </div>
                            )
                        ))}
                        {isTyping && (
                            <div className="pt-2.5 pb-2 flex flex-row">
                                <div className="pl-[14px] pr-2 self-end">
                                    <div className="w-[28px] h-[28px]">
                                        <img className="rounded-full object-cover"
                                             src={`/storage/` + user.image}
                                             alt="User Image"
                                        />
                                    </div>
                                </div>
                                <div className="ml-1.5 mb-2">
                                    <FontAwesomeIcon icon="fa-regular fa-comment-dots" beat size="2xl"
                                                     style={{color: "#686a6e",}}/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="m-4 min-h-[47px]">
                        <div className="border h-full rounded-3xl pl-[11px] pr-4">
                            <form onSubmit={submit} className="h-full flex flex-row items-center">
                                <div className="p-1 cursor-pointer shrink-0">
                                    <FontAwesomeIcon icon="fa-regular fa-face-smile" size="xl"/>
                                </div>
                                <input type="text"
                                       className="w-full h-5 ml-2 mr-1 pl-0 outline-0 border-0 focus:ring-0 placeholder:text-gray-400"
                                       placeholder="Message..."
                                       onChange={(e) => {
                                           setChatValue(e.target.value);
                                           checkTyping();
                                       }}
                                       value={chatValue}
                                />
                                <div className={chatValue ? `hidden` : `flex flex-row items-center`}>
                                    <p className="p-2 cursor-pointer">
                                        <FontAwesomeIcon icon="fa-solid fa-microphone" size="xl"/>
                                    </p>
                                    <p className="p-2 cursor-pointer">
                                        <FontAwesomeIcon icon="fa-regular fa-image" size="xl"/>
                                    </p>
                                    <p className="p-2 cursor-pointer">
                                        <FontAwesomeIcon icon="fa-regular fa-heart" size="xl"/>
                                    </p>
                                </div>
                                <div className="mr-1">
                                    <button
                                        type="submit"
                                        className={chatValue ? `text-sm font-bold text-igPrimaryButton hover:text-igLink` : `hidden`}
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Chat.layout = (page) => {
    return <InboxContainer users={page.props.users} auth={page.props.auth} children={page}
                           userInboxId={page.props.user.id}></InboxContainer>
}
export default Chat
