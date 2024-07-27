import {Head} from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Stories from "@/Components/Home/Stories.jsx";
import Post from "@/Components/Home/Post.jsx";
import BasicProfile from "@/Components/Home/BasicProfile.jsx";
import Suggestions from "@/Components/Home/Suggestions.jsx";
import Footer from "@/Components/Home/Footer.jsx";
import Login from "@/Pages/Auth/Login.jsx";

export default function Welcome({auth, posts, suggestions, stories}) {
    return (
        <>
            <Head title="Welcome"/>
            {auth.user ? (
                <>
                    <div className="flex">
                        <AuthenticatedLayout
                            user={auth.user}
                        >
                            <Head title="VMUSocial"/>
                            <div className="pt-9">
                                <div className="flex flex-row justify-center">
                                    <div className="md:px-12 lg:px-0 max-w-[630px] w-full lg:col-span-2">
                                        {stories.length ? (<Stories stories={stories}></Stories>) : (<></>)}
                                        <div className="container pt-5 max-w-lg">
                                            {posts.map((post) => (
                                                <Post key={post.id}
                                                      id={post.id}
                                                      currentUserId={auth.user.id}
                                                      caption={post.caption}
                                                      image={post.image}
                                                      postUserId={post.user.id}
                                                      username={post.user.username}
                                                      userImage={post.user.image}
                                                      likes={post.likes_count}
                                                      comments={post.comments}
                                                      postLikes={post.likes}
                                                      time={post.created_at}
                                                      post={post}
                                                >
                                                </Post>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-[319px] pl-[64px] hidden lg:block">
                                        <div className="fixed p-4 pt-0 w-[319px]">
                                            <BasicProfile user={auth.user}></BasicProfile>
                                            <Suggestions suggestions={suggestions}></Suggestions>
                                            <Footer></Footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AuthenticatedLayout>
                    </div>
                </>
            ) : (
                <>
                    <Login></Login>
                </>
            )}
        </>
    );
}
