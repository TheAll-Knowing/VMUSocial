import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from "@/Components/Profile/Footer.jsx";
import Settings from "@/Components/Pages/Settings.jsx";
import ProfileEdit from "@/Components/Pages/ProfileEdit.jsx";
export default function SettingsEdit({ auth }) {
    return (
        <>
            <div className="flex">
                <AuthenticatedLayout
                    user={auth.user}
                >
                    <Head title="Edit profile" />
                </AuthenticatedLayout>
                <div className="container lg:pt-10 max-w-5xl">
                    <main>
                        <Settings>
                            <ProfileEdit></ProfileEdit>
                        </Settings>
                    </main>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}
