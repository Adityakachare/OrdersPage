import React from "react";
import { X, Search, Ban, UserPlus } from "lucide-react";

const OpenOrdersTableFilters = ({ selectedTickers, setSelectedTickers }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="relative w-full sm:w-auto">
          <select className="border border-gray-300 rounded-md px-3 py-2 pr-12 text-sm bg-white appearance-none text-black w-full min-w-0">
            <option>AAA002</option>
            <option>AAA001</option>
            <option>AAA003</option>
          </select>
          <div className="absolute top-0 right-0 h-full flex items-center bg-gray-100 px-2 rounded-r-md border-l">
            <UserPlus
              size={18}
              strokeWidth={1.5}
              className="text-black"
            />
          </div>
        </div>

        <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm flex items-center gap-1 whitespace-nowrap">
          Lalit <X className="w-4 h-4 cursor-pointer" />
        </span>
      </div>

      <div className="flex flex-col sm:flex-row flex-1 items-start sm:items-center gap-2 relative">
        <div className="relative w-full sm:w-[60%]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a stock, future, option or index"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm text-black"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedTickers.map((ticker) => (
            <span
              key={ticker}
              className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full text-sm flex items-center gap-1 whitespace-nowrap"
            >
              {ticker}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() =>
                  setSelectedTickers((prev) => prev.filter((t) => t !== ticker))
                }
              />
            </span>
          ))}
        </div>
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 self-start w-full sm:w-auto justify-center"
        onClick={() => setSelectedTickers([])}
      >
        <Ban className="w-4 h-4" />
        Cancel all
      </button>
    </div>
  );
};

export default OpenOrdersTableFilters;