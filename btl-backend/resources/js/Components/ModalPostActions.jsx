import Modal from "@/Components/Modal.jsx";
import {useState} from "react";
export default function ModalPostActions(props) {
    const [isBg1, setIsBg1] = useState(false);
    const [isBg2, setIsBg2] = useState(false);
    const [isBg3, setIsBg3] = useState(false);
    const [isBg4, setIsBg4] = useState(false);
    return(
        <>
            <Modal {...props} size="xs">
                <ul className="w-full text-sm">
                    <li onMouseDown={() => setIsBg1(true)} onMouseUp={() => setIsBg1(false)}
                        onMouseLeave={() => setIsBg1(false)}  className={`${isBg1 ? "bg-gray-200" : ""}`}>
                        <a href="" className="border-b text-center py-3 block text-red-600 focus:outline-none">
                            Report
                        </a>
                    </li>
                    <li onMouseDown={() => setIsBg2(true)} onMouseUp={() => setIsBg2(false)}
                        onMouseLeave={() => setIsBg2(false)}  className={`${isBg2 ? "bg-gray-200" : ""}`}>
                        <a href="" className="border-b text-center py-3 block text-red-600">
                            Unfollow
                        </a>
                    </li>
                    <li onMouseDown={() => setIsBg4(true)} onMouseUp={() => setIsBg4(false)}
                        onMouseLeave={() => setIsBg4(false)}  className={`${isBg4 ? "bg-gray-200" : ""}`}>
                        <a href={route('post.show', props.id)} className="border-b text-center py-3 block">
                            Go to post
                        </a>
                    </li>
                    <li onMouseDown={() => setIsBg3(true)} onMouseUp={() => setIsBg3(false)}
                        onMouseLeave={() => setIsBg3(false)}  className={`${isBg3 ? "bg-gray-200" : ""}`}>
                        <a  onClick={() => props.setOpen(false)} className="border-b text-center py-3 block cursor-pointer">
                            Cancel
                        </a>
                    </li>
                </ul>
            </Modal>
        </>
    );
}
