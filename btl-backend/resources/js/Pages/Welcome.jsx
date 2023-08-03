import { Head } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Stories from "@/Components/Home/Stories.jsx";
import Post from "@/Components/Home/Post.jsx";
import BasicProfile from "@/Components/Home/BasicProfile.jsx";
import Suggestions from "@/Components/Home/Suggestions.jsx";
import Footer from "@/Components/Home/Footer.jsx";
import Login from "@/Pages/Auth/Login.jsx";

export default function Welcome({ auth, posts, suggestions, stories }) {
    return (
        <>
            <Head title="Welcome" />
                    {auth.user ? (
                        <>
                            <div className="flex">
                                <AuthenticatedLayout
                                    user={auth.user}
                                >
                                    <Head title="VMUSocial" />
                                </AuthenticatedLayout>
                                <div className="container pt-9 max-w-5xl">
                                    <main className="grid grid-cols-3">
                                        <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
                                            {stories.length ? (<Stories stories={stories}></Stories>) : (<></>)}
                                            <div className="container pt-5 max-w-lg">
                                                {posts.map((post) => (
                                                    <Post key={post.id}
                                                          id={post.id}
                                                          currentUserId={auth.user.id}
                                                          caption={post.caption}
                                                          image={post.image}
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
                                        <div className="col-span-1 hidden lg:block">
                                            <div className="fixed p-6 w-80">
                                                <BasicProfile user={auth.user}></BasicProfile>
                                                <Suggestions suggestions={suggestions} ></Suggestions>
                                                <Footer></Footer>
                                            </div>
                                        </div>
                                    </main>
                                </div>
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
