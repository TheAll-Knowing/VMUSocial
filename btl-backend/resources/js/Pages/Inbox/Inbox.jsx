import InboxLayout from "@/Pages/Inbox/InboxLayout.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthenticatedLayout_Inbox from "@/Layouts/AuthenticatedLayout_Inbox.jsx";
import {Head} from "@inertiajs/react";
import InboxContainer from "@/Pages/Inbox/InboxContainer.jsx";

const Inbox = ({users, auth}) => {
    return (
        <>
            <div className="flex flex-col justify-center h-full">
                <div className="px-4 flex flex-col items-center">
                    <FontAwesomeIcon icon="fa-solid fa-inbox" className="text-[6em]"/>
                </div>
                <div className="px-4 pt-5">
                    <span className="block text-xl leading-[25px] text-center">Your messages</span>
                </div>
                <div className="px-4 pt-4">
                    <span className="block text-sm leading-[18px] text-center text-[#737373]">Send private photos and messages to a friend or group</span>
                </div>
                <div className="px-4 pt-5 flex justify-center">
                    <button
                        className="h-8 w-auto px-4 font-semibold rounded-lg text-sm text-white bg-[#0095F6] hover:bg-[#1877F2]">Send
                        message
                    </button>
                </div>
            </div>
        </>
    );
}

Inbox.layout = (page) => {
    return <InboxContainer users={page.props.users} auth={page.props.auth} children={page}></InboxContainer>
}

export default Inbox
