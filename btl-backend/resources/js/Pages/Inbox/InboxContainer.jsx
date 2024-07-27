import {useEffect, useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import InboxLayout from "@/Pages/Inbox/InboxLayout.jsx";

export default function InboxContainer ({users, auth, userInboxId,children}) {
    const [status, setStatus] = useState(users.map(user => ({ id: user.id, last: 'Offline' })));

    const connectPusher = () => {
        const channel = Echo.join('status-update')
            .here((users) => {
                setStatus(status =>
                    status.map(el => {
                        const user = users.find(user => user.id === el.id);
                        return user ? { ...el, last: 'Active now' } : el;
                    })
                );
            })
            .joining((user) => {
                setStatus(status =>
                    status.map(el =>
                        el.id === user.id ? { ...el, last: 'Active now' } : el
                    )
                );
            })
            .leaving((user) => {
                setStatus(status =>
                    status.map(el =>
                        el.id === user.id ? { ...el, last: 'Offline' } : el
                    )
                );
            });

        return channel;
    };
    useEffect(() => {
        const channel = connectPusher();
        return () => {
            Echo.leave('status-update');
        };
    }, []);
    return (
            <div className="flex">
                <AuthenticatedLayout
                    user={auth.user}
                    isChat
                >
                    <Head title="VMUSocial"/>
                    <InboxLayout auth={auth} users={users} status={status} userInboxId={userInboxId}>
                        {children}
                    </InboxLayout>
                </AuthenticatedLayout>

            </div>
    );
}
