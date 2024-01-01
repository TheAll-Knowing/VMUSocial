import {Link} from "@inertiajs/react";

export default function ChatUser(props) {
    const {
        stt,
        id,
        username,
        name,
        userImage,
    } = props;
    const desiredSt = stt.find((st) => st.id === id);
    return(
        <>
            <div className="">
                <Link href={route('chat.show', id)}>
                    <div className="py-2 px-6 hover:bg-gray-50">
                        <div className="w-[350px] flex flex-nowrap items-center justify-start">
                            <div className="max-w-full shrink-0">
                                <div className="pr-3">
                                    <div className="w-14 h-14">
                                                <span className="block w-14 h-14 rounded-full">
                                                    <img height="56" width="56" alt="User avatar"
                                                         className="object-cover rounded-full"
                                                         src={`/storage/` + userImage}
                                                    />
                                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-auto grow">
                                <div className="flex flex-col gap-1">
                                    <div className="w-[224px]">
                                        <span className="block text-sm leading-[18px] font-normal">{name}</span>
                                    </div>
                                    <div className="w-full">
                                        {
                                            desiredSt ? (
                                                <span className="block text-xs text-[#737373] leading-4 font-normal"
                                                      key={desiredSt.id}
                                                >
                                                {desiredSt.last}
                                                </span>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
