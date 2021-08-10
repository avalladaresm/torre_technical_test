import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const Input = ({
  label,
  buttonText,
  searchText,
  setSearchText = () => "",
}: InputProps) => {
  const [_searchText, _setSearchText] = useState("");

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-50"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => _setSearchText(e.target.value)}
            value={_searchText}
            className="focus:ring-gray-500 focus:border-gray-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
          />
        </div>
        <button
          onClick={() => setSearchText(_searchText)}
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
        >
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

interface InputProps {
  label: string;
  buttonText: string;
  searchText?: string;
  setSearchText?: (text: string) => void;
}
