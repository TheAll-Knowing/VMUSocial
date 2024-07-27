import {Link} from "@inertiajs/react";
import moment from "moment/moment.js";
export default function ChatUser(props) {
    const {
        stt, id, username, name, userImage, userInboxId, message, timeMessage
    } = props;
    const desiredSt = stt.find((st) => st.id === id);
    const isDisabled = userInboxId === id;
    return (
        <div
            className={(userInboxId === id ? `py-2 px-6 bg-[#efefef]` : `py-2 px-6 hover:bg-gray-50`) + ` cursor-pointer`}>
            <Link as="button" href={route('chat.show', id)}
                  className={"w-full text-start disabled:pointer-events-none"}
                  disabled={isDisabled}
            >
                <div className="w-[350px] flex flex-nowrap items-center justify-start">
                    <div className="max-w-full shrink-0">
                        <div className="pr-3">
                            <div className="w-14 h-14 relative">
                            <span className="block w-14 h-14 rounded-full">
                                <img height="56" width="56" alt="User avatar"
                                     className="object-cover rounded-full"
                                     src={`/storage/` + userImage}
                                />
                            </span>
                                {desiredSt.last !== 'Offline' && (<div
                                    className="absolute right-0 bottom-0 w-3 h-3 bg-igActiveStatus rounded-full border-white border-[3px] box-content"></div>)}
                            </div>
                        </div>
                    </div>
                    <div className="basis-auto grow">
                        <div className="flex flex-col gap-1">
                            <div className="w-[224px]">
                            <span
                                className={`block text-sm leading-[18px] ${message ? "font-semibold" : " font-normal"}`}
                            >
                                {name}
                            </span>
                            </div>
                            <div className="w-full">
                                {message ? (
                                    <div className="flex flex-row items-center">
                                        <span
                                            className="block text-xs leading-4 font-semibold"
                                        >
                                        {message}
                                        </span>
                                        <i className="mx-1 w-0.5 h-0.5 bg-[#757575] rounded-full"></i>
                                        <span
                                            className="block text-xs text-[#737373] leading-4 font-normal"
                                        >
                                            {moment(timeMessage).fromNow()}
                                        </span>
                                    </div>
                                ) : (
                                    <span
                                        className="block text-xs text-[#737373] leading-4 font-normal"
                                        key={desiredSt.id}
                                    >
                                    {desiredSt.last}
                                </span>
                                )}
                            </div>
                        </div>
                    </div>
                    {message && (
                        <div className="max-w-full shrink-0">
                            <div className="pl-3">
                                <span className="block w-2 h-2 rounded-full bg-igPrimaryButton"></span>
                            </div>
                        </div>
                    )}
                </div>
            </Link>
        </div>);
}
