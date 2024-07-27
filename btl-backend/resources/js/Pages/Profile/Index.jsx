import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ProfileHeader from "@/Components/Profile/ProfileHeader.jsx";
import ProfileHeaderGuest from "@/Components/Profile/ProfileHeaderGuest.jsx";
import ProfileHighlights from "@/Components/Profile/ProfileHighlights.jsx";
import ProfilePosts from "@/Components/Profile/ProfilePosts.jsx";
import Footer from "@/Components/Profile/Footer.jsx";
import ModalSettings from "@/Components/ModalSettings.jsx";
import {useState} from "react";
import NavbarGuestLayout from "@/Layouts/NavbarGuestLayout.jsx";
import ProfilePostsGuest from "@/Components/Profile/ProfilePostsGuest.jsx";
export default function Index({ auth, user, posts, followers, following }) {
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    return (
        <>
            {auth.user ? (
                <div className="flex">
                    <AuthenticatedLayout
                        user={auth.user}
                    >
                        <Head title="VMUSocial"/>
                        <div className="">
                            <div className="max-w-[935px] mx-auto  lg:pt-5">
                                <main>
                                    <ProfileHeader user={user} posts={posts} followers={followers} following={following}
                                                   setIsSettingsModalOpen={setIsSettingsModalOpen}></ProfileHeader>
                                    <ProfileHighlights user={user}></ProfileHighlights>
                                    <ProfilePosts currentUser={auth.user} user={user} posts={posts}
                                                  followers={followers} following={following}></ProfilePosts>
                                </main>
                                <Footer></Footer>
                            </div>
                        </div>
                    </AuthenticatedLayout>

                </div>
            ) : (
                <>
                    <NavbarGuestLayout>
                        <Head title="VMUSocial"/>
                    </NavbarGuestLayout>
                    <div className="container lg:p-5 max-w-5xl">
                        <main>
                            <ProfileHeaderGuest user={user} posts={posts} followers={followers}
                                                following={following}></ProfileHeaderGuest>
                            <ProfileHighlights user={user}></ProfileHighlights>
                            <ProfilePostsGuest user={user} posts={posts} followers={followers}
                                               following={following}></ProfilePostsGuest>
                        </main>
                        <Footer></Footer>
                    </div>
                </>
            )}

            <ModalSettings open={isSettingsModalOpen}
                           setOpen={setIsSettingsModalOpen}
            >
            </ModalSettings>
        </>
    );
}
