import logo from './assets/vmu.svg';
import ItemLink from '@/Components/NavItemsLink/ItemLink';
import ItemLinkProfile from '@/Components/NavItemsLink/ItemLinkProfile'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Menu, Transition } from '@headlessui/react'
import {Link} from "@inertiajs/react";
import {Fragment, useCallback, useState} from "react";
import Modal from "@/Components/Modal.jsx";
import {useDropzone} from "react-dropzone";
import PostPreview from "@/Components/PostPreview.jsx";
export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
}
export default function Authenticated({ user, children }) {
    const [isNewPostModalOpen,setIsNewPostModalOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const [caption, setCaption] = useState("");
    const onDrop = useCallback(acceptedFiles => {
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {preview: URL.createObjectURL(file)})
            )
        );
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    const isFileDropped = () => {
        return files.length !== 0;
    }
    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };
    const openNewPostModal = () => {
        setFiles([]);
        setIsNewPostModalOpen(true);
    };
    const share = async () => {
        try {
            const file = files[0];
            const formData = new FormData();

            formData.append('caption', caption);
            formData.append('file', file);
            const response = await axios.post(route('post.add'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setIsNewPostModalOpen(false);
            window.location.href = ('/profile/' + user.username);
        } catch (error) {
            console.log("error:", error.response.data);
        }
    };
    return (
        <>
            <Modal title="Create new post"
                   open={isNewPostModalOpen}
                   setOpen={setIsNewPostModalOpen}
                   size={isFileDropped() ? 'lg' : 'md'}
                   share={() => share()}
                   isFileDropped={isFileDropped}
            >
                {!isFileDropped() ? (
                    <div {...getRootProps()}
                         className="flex flex-col items-center justify-center h-full"
                    >
                        <input {...getInputProps()} />
                        <FontAwesomeIcon icon="fa-solid fa-photo-film" size="2xl" />
                        <h2 className="py-3 text-2xl font-light">
                            Drag photos and videos here
                        </h2>
                        <a className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg mt-2">
                            Select from computer
                        </a>
                    </div>
                ) : (
                    <div>
                        <PostPreview files={files}
                                     user={user}
                                     caption={caption}
                                     handleCaptionChange={handleCaptionChange}
                        >
                        </PostPreview>
                    </div>
                )}
            </Modal>
            <nav className={`w-20 lg:w-80 sticky top-0 flex flex-col p-5 pt-8 duration-200 h-screen border-r`}>
                <div className='text-xl absolute cursor-pointer rounded-md -right-3 top-9 border-2 bg-white'>
                </div>
                <a href={route('/')} className="flex gap-x-4 items-center cursor-pointer">
                    <img src={logo} alt="logo" width="50"/>
                    <h1 className={`font-medium text-xl duration-300 scale-0 lg:scale-100`}>VMUSocial</h1>
                </a>
                <ul className="pt-6 space-y-5">
                    <ItemLink href={route('/')} active={route().current('/')} ic="fa-solid fa-house">Home</ItemLink>
                    <li className="flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100">
                        <div className="text-2xl">
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <span className={`hidden lg:inline origin-left duration-250`}>Search</span>
                    </li>
                    <li className="flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100">
                        <div className="text-2xl">
                            <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
                        </div>
                        <span className={`hidden lg:inline origin-left duration-250`}>Messages</span>
                    </li>
                    <a onClick={() => openNewPostModal()} className="flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100">
                        <div className="text-2xl">
                            <FontAwesomeIcon icon="fa-regular fa-square-plus" />
                        </div>
                        <span className={`hidden lg:inline origin-left duration-250`}>Create Post</span>
                    </a>
                    {/*<a href={route('profile.show', user.username)} className="flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-gray-100">*/}
                    {/*    <div className="text-2xl">*/}
                    {/*        <img className="rounded-full w-6" src={user.image} alt="avatar profile"/>*/}
                    {/*    </div>*/}
                    {/*    <span className={`hidden lg:inline origin-left duration-250`}>Profile</span>*/}
                    {/*</a>*/}
                    <ItemLinkProfile href={route('profile.show', user.username)} active={route().current('profile.show', user.username)} user={user}>Profile</ItemLinkProfile>
                </ul>
                <Menu as="div" className="mt-auto gap-x-4 relative text-left">
                    <Menu.Button className="w-full p-2 cursor-pointer rounded-md hover:bg-gray-100">
                        <div className="flex items-center gap-x-4">
                            <div className="text-2xl">
                                <FontAwesomeIcon icon="fa-solid fa-bars"/>
                            </div>
                            <a
                                type="button"
                                className="hidden lg:inline origin-left duration-250">
                                More
                            </a>
                        </div>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className="absolute bottom-left top-0 px-1 -translate-y-[calc(100%+5px)] w-56 rounded-md shadow-lg bg-white ring-1
                        ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                            <div className="py-1">
                                <Menu.Item>
                                    {({active}) => (
                                        <Link href={route('profile.edit')}
                                              className={`${
                                                  classNames(active
                                                  ? 'bg-gray-100 rounded-md text-gray-900'
                                                  : 'text-gray-700'
                                                  , "block px-4 py-2 text-md text-gray-700")
                                              }`}>
                                            <FontAwesomeIcon icon="fa-regular fa-address-card" className="mr-2"/> Edit profile
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({active}) => (
                                        <Link href={route('logout')} method="post"
                                              className={`${
                                                  classNames(active
                                                          ? 'bg-gray-100 rounded-md text-gray-900'
                                                          : 'text-gray-700'
                                                      , "block px-4 py-2 text-md text-gray-700")
                                              }`}>
                                            <FontAwesomeIcon icon="fa-right-from-bracket" className="mr-2"/> Log out
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </nav>
            <main>{children}</main>
        </>
    );
}
