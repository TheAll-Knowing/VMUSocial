import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import Footer from "@/Components/Profile/Footer.jsx";
import Settings from "@/Components/Pages/Settings.jsx";
import ChangePassword from "@/Components/Pages/ChangePassword.jsx";

export default function SettingsPassword({auth}) {
    return (
        <>
            <div className="flex">
                <AuthenticatedLayout
                    user={auth.user}
                >
                    <Head title="Edit profile"/>
                    <div className="container lg:pt-10 max-w-5xl">
                        <Settings>
                            <ChangePassword user={auth.user}></ChangePassword>
                        </Settings>
                        <Footer></Footer>
                    </div>
                </AuthenticatedLayout>
            </div>
        </>
    );
}
