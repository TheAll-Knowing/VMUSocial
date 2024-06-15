import InboxContainer from "@/Pages/Inbox/InboxContainer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useForm} from "@inertiajs/react";
import {useEffect, useRef} from "react";

const Chat = ({users, user, auth, chats}) => {
    var currentUserId = auth.user.id; // The ID of the currently logged in user
    var receiverId = user.id;
    const {data, setData, post, processing, errors, reset} = useForm({
        user_id: auth.user.id, receiver_id: user.id, message: '',
    })
    const scrollRef = useRef(null);

    const connectChat = () => {
        const channelChat = Echo.private(`chat.${channelName}`)
            .listen('.ChatCreated', (e) => {
                console.log(e.model);
            });
        return channelChat;
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chats]);
    useEffect(() => {
        const channel = connectChat();
        return () => {
            Echo.leave(`chat.${channelName}`);
        };
    }, []);
    function submit(e) {
        e.preventDefault()
        post('/direct/chat', {
            preserveScroll: true,
            preserveState: true,
        })
        reset("message");
    }
    var channelName = currentUserId < receiverId ? `${currentUserId}-${receiverId}` : `${receiverId}-${currentUserId}`;

    return (<>
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
                    {chats.map((chat,index)=> (
                        chat.user_id == auth.user.id ? (
                            <div key={index} className="pt-2.5 pb-2 flex flex-row justify-end mr-4">
                                <div className="rounded-2xl bg-[#4e92ec] px-3 py-[6px]">
                                    <span className="text-base text-white">{chat.message}</span>
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="pt-2.5 pb-2 flex flex-row">
                                <div className="pl-[14px] pr-2 self-end">
                                    <div className="w-[28px] h-[28px]">
                                        <img className="rounded-full object-cover"
                                             src={`/storage/`+user.image}
                                             alt="User Image"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-[#efefef] px-3 py-[6px]">
                                    <span className="text-base">{chat.message}</span>
                                </div>
                            </div>
                        )
                    ))}
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
                                       setData('message', e.target.value)
                                   }}
                                   value={data.message}
                            />
                            <div className={data.message ? `hidden` : `flex flex-row items-center`}>
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
                                    className={data.message ? `text-sm font-bold text-igPrimaryButton hover:text-igLink` : `hidden`}
                                    disabled={processing}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

Chat.layout = (page) => {
    return <InboxContainer users={page.props.users} auth={page.props.auth} children={page}
                           userInboxId={page.props.user.id}></InboxContainer>
}
export default Chat
