import {Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const getSizeClasses = (size) => {
    let utilities = "";
    switch (size) {
        case 'xs':
            utilities = 'h-fit sm:max-w-md rounded-lg';
            break;
        case 'lg':
            utilities = 'h-5/6 max-h-[52rem] sm:max-w-6xl rounded-md rounded-l-none';
            break;
        default:
            utilities = 'h-4/5 sm:max-w-screen-md rounded-lg';
            break;
    }
    return utilities;
}
export default function Modal(props) {
    const {open, setOpen, title, size, share, isFileDropped} = props;
    return (
        <Transition show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-50 flex items-center justify-center inset-0 overflow-y-auto" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-neutral-800 bg-opacity-90 transition-opacity" />
                </Transition.Child>
                <a onClick={() => setOpen(false)} className="absolute right-6 top-4 text-white text-2xl cursor-pointer focus:outline-none">
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                </a>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className={`flex items-center justify-center bg-white overflow-hidden shadow-xl transform transition-all
                    align-middle sm:w-full ${title ? "pt-10" : ""} ${getSizeClasses(size)}`}>
                            {title && (
                                <div className="absolute top-0 w-full text-center border-b py-2 font-semibold">
                                    <Dialog.Title>{title}</Dialog.Title>
                                    {share && isFileDropped() && (
                                        <a
                                           className="absolute top-2 right-5 text-sky-500 cursor-pointer hover:text-sky-800"
                                           onClick={share}>
                                            Share
                                        </a>
                                    )}
                                </div>
                            )}
                            <div className="w-full h-full">{props.children}</div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
