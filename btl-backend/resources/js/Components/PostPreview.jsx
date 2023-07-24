import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PostPreview(props){
    const {files, user, caption, handleCaptionChange} = props;
    if (files.length === 0) {
        return;
    }
    return(
        <>
            <div className="flex">
                <div className="w-3/4 overflow-hidden border-r">
                    <div className="flex justify-center items-center h-[50rem] bg-black">
                        <img src={files[0].preview} key={files[0].name} alt="image post" className="w-100"/>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="p-3 border-b">
                        <a className="">
                            <img src={`/storage/`+user.image} alt="avatar" className="rounded-full w-8 max-w-none inline"/>
                            <span className="font-medium text-sm ml-2">
                                {user.username}
                            </span>
                        </a>
                        <textarea className="p-1 px-0 mt-3 w-full border-none focus:ring-0 h-40"
                                  placeholder="Write a caption..."
                                  value={caption}
                                  onChange={handleCaptionChange}
                        >
                        </textarea>
                        <div className="flex">
                            <div className="w-3/6">
                                <FontAwesomeIcon icon={["far", "fa-face-smile"]}
                                                 className="text-gray-400 text-lg">
                                </FontAwesomeIcon>
                            </div>
                            <div className="w-3/6 text-right">
                                <span className="text-gray-200 text-sm">{caption.length}/2,200</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
