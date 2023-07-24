import avt from "./assets/tx8oe0m8c2ka1.png";
export default function ProfileHighlights() {
    return(
        <>
            <div className="flex flex-row p-2 content-center justify-center mb-8 space-x-2 md:space-x-10 text-sm font-semibold w-full overflow-auto">
                <div>
                    <a href="">
                         <div className="border p-1 rounded-full">
                             <img src={avt}
                                  alt="story"
                                  className="rounded-full"
                                  width="80"/>
                         </div>
                        <div className="text-center overflow-hidden text-ellipsis">
                            Twitter
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <div className="border p-1 rounded-full">
                            <img src={avt}
                                 alt="story"
                                 className="rounded-full"
                                 width="80"/>
                        </div>
                        <div className="text-center overflow-hidden text-ellipsis">
                            Youtube
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <div className="border p-1 rounded-full">
                            <img src={avt}
                                 alt="story"
                                 className="rounded-full"
                                 width="80"/>
                        </div>
                        <div className="text-center overflow-hidden text-ellipsis">
                            Facebook
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <div className="border p-1 rounded-full">
                            <img src={avt}
                                 alt="story"
                                 className="rounded-full"
                                 width="80"/>
                        </div>
                        <div className="text-center overflow-hidden text-ellipsis">
                            Twitter
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}
