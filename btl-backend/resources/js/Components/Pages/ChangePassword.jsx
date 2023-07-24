import {useForm} from "@inertiajs/react";
import {useRef} from "react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

export default function ChangePassword(props) {
    const {user} = props;
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });
    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };
    return (
        <>
            <form onSubmit={updatePassword}>
                <div className="flex flex-row items-center">
                    <div className="w-1/3 p-3">
                        <a href="" className="float-right mr-5">
                            <img src={`/storage/`+user.image} alt="avatar" className="rounded-full" width="40"/>
                        </a>
                    </div>
                        <h1 className="text-xl">{user.username}</h1>
                </div>
                <div className="flex flex-row mt-5 items-center">
                    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                        <label htmlFor="current_password" className="m-0 p-0 align-baseline font-bold flex align-center">
                            Current password
                        </label>
                    </div>
                    <div className="w-2/3 pr-10">
                        {/*<input type="text"*/}
                        {/*       className="border p-1 px-3 w-full"*/}
                        {/*       placeholder="Current password"*/}
                        {/*       value={name}*/}
                        {/*       onChange={(e) => setName(e.target.value)}*/}
                        {/*/>*/}
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            placeholder="Current password"
                        />

                        <InputError message={errors.current_password} className="mt-2" />
                    </div>
                </div>
                <div className="flex flex-row mt-5 items-center">
                    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                        <label htmlFor="password" className="m-0 p-0 align-baseline font-bold flex align-center">
                            New password
                        </label>
                    </div>
                    <div className="w-2/3 pr-10">
                        {/*<input type="text"*/}
                        {/*       className="border p-1 px-3 w-full"*/}
                        {/*       placeholder="New password"*/}
                        {/*       value={name}*/}
                        {/*       onChange={(e) => setName(e.target.value)}*/}
                        {/*/>*/}
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder="New password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>
                <div className="flex flex-row mt-5 items-center">
                    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                        <label htmlFor="" className="m-0 p-0 align-baseline font-bold flex align-center">
                            Confirm password
                        </label>
                    </div>
                    <div className="w-2/3 pr-10">
                        {/*<input type="text"*/}
                        {/*       className="border p-1 px-3 w-full"*/}
                        {/*       placeholder="Confirm password"*/}
                        {/*       value={name}*/}
                        {/*       onChange={(e) => setName(e.target.value)}*/}
                        {/*/>*/}
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder="Confirm password"
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>
                <div className="flex flex-row mt-5 items-center">
                    <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    </div>
                    <div className="w-2/3 pr-10">
                        <button
                            type="submit"
                            className="bg-sky-500 text-white font-semibold py-1 px-2 rounded-lg text-md disabled:opacity-50 hover:bg-sky-600"
                        >
                            Save
                        </button>

                        <Transition
                            show={recentlySuccessful}
                            enterFrom="opacity-0"
                            leaveTo="opacity-0"
                            className="transition ease-in-out"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                    </div>
                </div>
            </form>
        </>
    );
}
