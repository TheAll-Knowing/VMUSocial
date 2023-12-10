import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export default function SearchBar({isSearchOpen, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.username.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };
    return (
        <>
            <div className={`${!isSearchOpen && "scale-x-0"} origin-left duration-150 w-96 top-0 flex flex-col h-screen rounded-r-2xl border-r ${isSearchOpen && "border-l"} bg-white fixed left-20 z-[1]`}>
                <div className="p-5 pt-6">
                    <span className="text-2xl font-semibold">Search</span>
                </div>
                <div className="p-5">
                    <div className="relative">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="absolute left-3 top-3 text-gray-300"/>
                        <input value={wordEntered}
                               onChange={(event) => handleFilter(event)}
                               type="text"
                               className="p-2 bg-gray-100 rounded-lg border-none w-full pl-10 align-middle focus:ring-0"/>
                    </div>
                </div>
                    {filteredData.length !== 0 &&(
                        <div className="py-2 overflow-y-scroll h-full">
                            {filteredData.map((value, index)=>{
                                return (
                                    <div key={index}>
                                        <a href={route('profile.show', value.username)} className="flex items-center cursor-pointer p-2 pl-6 rounded-md hover:bg-gray-100">
                                                <img className="rounded-full" src={`/storage/`+value.image} alt="avt" width="46"/>
                                            <div className="w-72 m-auto">
                                                <div className="text-sm font-medium pl-3">
                                                    <span>{value.username}</span>
                                                </div>
                                                <div className="text-gray-500 text-sm pl-3">
                                                    {value.name}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    )}
            </div>
        </>
    );
}
