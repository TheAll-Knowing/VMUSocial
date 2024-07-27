import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";
import {Link} from "@inertiajs/react";
import {useDebounce} from "@/Hooks";

export default function SearchBar({isSearchOpen, data}) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            try {
                const result = await axios.get(route('user.search'), {
                    params: {
                        q: searchValue,
                    },
                });
                setSearchResult(result.data.users);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);
    return (
        <div
            className={`${!isSearchOpen && "scale-x-0"} origin-left duration-200 w-96 top-0 flex flex-col fixed left-20 z-[1]`}>
            <div className={`h-screen rounded-r-2xl border-r ${isSearchOpen && "border-l bg-white"}`}>
                <div className="p-5 pt-6">
                    <span className="text-2xl font-semibold">Search</span>
                </div>
                <div className="p-5">
                    <div className="relative">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"
                                         className="absolute left-3 top-3 text-gray-300"
                        />
                        <input value={searchValue}
                               ref={inputRef}
                               onChange={(e) => setSearchValue(e.target.value)}
                               type="text"
                               className="p-2 bg-gray-100 rounded-lg border-none w-full pl-10 pr-10 align-middle focus:ring-0"
                        />
                        {!!searchValue && !loading && (
                            <FontAwesomeIcon icon="fa-solid fa-circle-xmark"
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                style={{color: "#929496",}}
                                onClick={()=>{
                                    setSearchValue('');
                                    inputRef.current.focus();
                                    setSearchResult([]);
                                }}
                            />
                        )}
                        {loading &&(
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                                <FontAwesomeIcon icon="fa-solid fa-spinner"
                                                 className="animate-spin"
                                />
                            </div>
                        )}
                    </div>
                </div>
                {searchResult.length !== 0 && (
                    <div className="py-2 overflow-y-auto h-[83%]">
                        {searchResult.map((value, index) => {
                            return (
                                <div key={index}>
                                    <Link href={route('profile.show', value.username)}
                                          className="flex items-center cursor-pointer p-2 pl-6 rounded-md hover:bg-gray-100">
                                        <img className="rounded-full" src={`/storage/` + value.image} alt="avt"
                                             width="46"/>
                                        <div className="w-72 m-auto">
                                            <div className="text-sm font-medium pl-3">
                                                <span>{value.username}</span>
                                            </div>
                                            <div className="text-gray-500 text-sm pl-3">
                                                {value.name}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )}


                {/*{filteredData.length !== 0 && (*/}
                {/*    <div className="py-2 overflow-y-scroll h-full">*/}
                {/*        {filteredData.map((value, index) => {*/}
                {/*            return (*/}
                {/*                <div key={index}>*/}
                {/*                    <Link href={route('profile.show', value.username)}*/}
                {/*                          className="flex items-center cursor-pointer p-2 pl-6 rounded-md hover:bg-gray-100">*/}
                {/*                        <img className="rounded-full" src={`/storage/` + value.image} alt="avt"*/}
                {/*                             width="46"/>*/}
                {/*                        <div className="w-72 m-auto">*/}
                {/*                            <div className="text-sm font-medium pl-3">*/}
                {/*                                <span>{value.username}</span>*/}
                {/*                            </div>*/}
                {/*                            <div className="text-gray-500 text-sm pl-3">*/}
                {/*                                {value.name}*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </Link>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
}
