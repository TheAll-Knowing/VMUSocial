import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
export default function Stories({stories}) {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 7,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };
    const goNext = () => {
        sliderRef.current.slickNext();
    };

    const goPrev = () => {
        sliderRef.current.slickPrev();
    };
    return(
        <div className="relative bg-white">
            <div className="absolute left-2 top-12 z-10">
                <a className="bg-white text-gray-400 flex items-center justify-content rounded-full text-sm w-6 h-6 shadow-md cursor-pointer"
                   onClick={goPrev}
                >
                    <FontAwesomeIcon className="mx-auto" icon={"chevron-left"}/>
                </a>
            </div>
            <div className="absolute right-2 top-12 z-10">
                <a className="bg-white text-gray-400 flex items-center justify-content rounded-full text-sm w-6 h-6 shadow-md cursor-pointer"
                   onClick={goNext}
                >
                    <FontAwesomeIcon className="mx-auto" icon={"chevron-right"}/>
                </a>
            </div>
            <Slider
                className="border border-slate-200 p-4"
                {...settings}
                ref={sliderRef}
            >
                {stories.map((story) => (
                    <div key={story.id}>
                        <div className="flex flex-col items-center space-y-1">
                            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                                <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                    <img
                                        alt="avatar"
                                        className="rounded-full w-14 h-14"
                                        src={`/storage/`+story.image}
                                    />
                                </a>
                            </div>
                            <a className="cursor-pointer">
                                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                    {story.username}
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
            {/*<ul className="border rounded-lg border-slate-200 p-4 flex justify-center space-x-4 overflow-x-auto">*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://github.com/mdo.png" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="w-16 cursor-pointer truncate">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11222222222222*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/7.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="w-16 cursor-pointer truncate">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11333333333333*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/75.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="cursor-pointer">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/women/75.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="cursor-pointer">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/women/5.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="cursor-pointer">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/7.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="cursor-pointer">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/men/75.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="cursor-pointer">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="flex flex-col items-center space-y-1">*/}
            {/*        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*/}
            {/*            <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*/}
            {/*                <img className="rounded-full w-14 h-14" src="https://randomuser.me/api/portraits/women/75.jpg" alt=""/>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <a href="" className="cursor-pointer">*/}
            {/*            <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*/}
            {/*                User11*/}
            {/*            </span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    /!*<li className="flex flex-col items-center space-y-1">*!/*/}
            {/*    /!*    <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">*!/*/}
            {/*    /!*        <a href="" className="block bg-white p-0.5 rounded-full cursor-pointer">*!/*/}
            {/*    /!*            <img className="rounded-full w-16 h-16" src="https://randomuser.me/api/portraits/women/5.jpg" alt=""/>*!/*/}
            {/*    /!*        </a>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*    <a href="" className="cursor-pointer">*!/*/}
            {/*    /!*        <span className="text-xs text-center overflow-hidden text-ellipsis w-20">*!/*/}
            {/*    /!*            User11*!/*/}
            {/*    /!*        </span>*!/*/}
            {/*    /!*    </a>*!/*/}
            {/*    /!*</li>*!/*/}
            {/*</ul>*/}
        </div>
    );
}
