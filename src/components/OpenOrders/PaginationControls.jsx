import React from "react";

const PaginationControls = ({
  currentPage,
  nPages,
  prevPage,
  nextPage,
  indexOfFirstRecord,
  indexOfLastRecord,
  totalRecords,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-y-3">
      <div className="text-sm text-gray-700">
        Showing {indexOfFirstRecord + 1}-
        {Math.min(indexOfLastRecord, totalRecords)} of {totalRecords} results
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={prevPage}
          className="px-3 py-2 text-sm text-black border-gray-300 border rounded-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-3 py-1 text-md font-bold text-black">
          Page {currentPage} of {nPages}
        </span>
        <button
          onClick={nextPage}
          className="px-3 py-2 text-sm text-black border-gray-300 border rounded-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === nPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;