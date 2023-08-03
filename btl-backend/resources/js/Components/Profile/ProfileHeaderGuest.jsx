export default function ProfileHeaderGuest({user, posts, followers, following}) {
    return(
        <>
            <div className="grid grid-cols-3 mb-5">
                <div className="bg-green p-3 rounded flex items-start justify-center">
                    <img src={`/storage/`+user.image}
                         alt="Avatar"
                         className="rounded-full"
                         width="150"/>
                </div>
                <div className="p-3 text-black col-span-2">
                    <div className="flex items-center">
                        <h1 className="inline-block text-xl align-bottom">
                            {user.username}
                        </h1>
                        <a
                            href={route('/')} className={`bg-gray-100 ml-4 font-semibold py-1 px-2 rounded-lg text-md hover:bg-gray-200`}>
                            <span className="text-sm">Follow</span>
                        </a>
                    </div>
                    <div className="flex-row py-5 max-w-sm hidden md:flex">
                        <div className="basis-1/3">
                            <strong>{posts.length}</strong> posts
                        </div>
                        <div className="basis-1/3">
                            <strong>{followers.length}</strong> followers
                        </div>
                        <div className="basis-1/3">
                            <strong>{following.length}</strong> following
                        </div>
                    </div>
                    <h6 className="text-sm font-bold">{user.name}</h6>
                    <p className="text-sm">{user.bio}</p>
                    <a href={user.website}
                       target="_blank"
                       className="text-sm text-blue-700 font-bold">
                        {user.website}
                    </a>
                </div>
            </div>
        </>
    );
}
