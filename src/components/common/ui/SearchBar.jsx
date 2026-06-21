import { useState } from "react";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

const SearchBar = ({ placeholder = "Search...", onSearch, className }) => {
     const [query, setQuery] = useState("");

     const handleSearch = (e) => {
          const value = e.target.value;
          setQuery(value);

          if (onSearch) {
               onSearch(value);
          }
     };

     return (
          <div className={twMerge(`flex items-center gap-2 rounded-xl border bg-white px-4 py-2 border-gray-300 focus-within:border-gray-400 w-full ${className}`)}>
               <Search size={18} className="text-bg-violet-500" strokeWidth={2.5} />
               <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder={placeholder}
                    className="flex-1 outline-none bg-transparent w-full"
               />
          </div>
     );
};

export default SearchBar;