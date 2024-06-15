import FollowSuggestion from "@/Components/Home/FollowSuggestion.jsx";
import {Link} from "@inertiajs/react";

export default function Suggestions({suggestions}) {
    return(
        <>
            <div className="flex flex-row pt-5">
                <div className="w-72 font-bold text-gray-500 text-sm">
                    Suggested for you
                </div>
                <div className="w-32 text-sm text-right">
                    <a href="#" className="text-black-400 text-xs">See All</a>
                </div>
            </div>
            <ul className="p-1">
                {suggestions.map((suggestion) => {
                    return (
                        <div key={suggestion.id} className="flex py-2">
                            <div className="flex items-center">
                                <Link href={route('profile.show', suggestion.username)} className="inline-block align-top">
                                    <img className="rounded-full" src={`/storage/`+suggestion.image}
                                         alt=""
                                         width="35"/>
                                </Link>
                                <div className="inline-block ml-2">
                                    <Link href={route('profile.show', suggestion.username)} className="text-sm font-medium">
                                        {suggestion.username}
                                    </Link>
                                    <div className="text-gray-500 text-xs">
                                        Suggested for you
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 items-center flex justify-end">
                                <FollowSuggestion id={suggestion.id}></FollowSuggestion>
                            </div>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}
