"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import OpenOrdersTable from "@/components/OpenOrders/OpenOrdersTable";
import OpenOrdersTableFilters from "@/components/OpenOrders/OpenOrdersTableFilters";
import PaginationControls from "@/components/OpenOrders/PaginationControls";
import DownloadButton from "@/components/OpenOrders/DownloadButton";
import useOrdersLogic from "@/hooks/useOrdersLogic";

const OpenOrdersPage = () => {
  const {
    sortConfig,
    handleSort,
    getSortIcon,
    selectedTickers,
    handleTickerClick,
    setSelectedTickers,
    currentPage,
    nextPage,
    prevPage,
    currentRecords,
    nPages,
    indexOfFirstRecord,
    indexOfLastRecord,
    sortableOrders,
  } = useOrdersLogic(); // Utilize the custom hook

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="px-4 py-6 max-w-auto mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-0">
            Open Orders
          </h1>
          <DownloadButton />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-md">
          <OpenOrdersTableFilters
            selectedTickers={selectedTickers}
            setSelectedTickers={setSelectedTickers}
          />

          <OpenOrdersTable
            currentRecords={currentRecords}
            handleSort={handleSort}
            sortConfig={sortConfig}
            getSortIcon={getSortIcon}
            handleTickerClick={handleTickerClick}
            selectedTickers={selectedTickers}
          />
        </div>

        <PaginationControls
          currentPage={currentPage}
          nPages={nPages}
          prevPage={prevPage}
          nextPage={nextPage}
          indexOfFirstRecord={indexOfFirstRecord}
          indexOfLastRecord={indexOfLastRecord}
          totalRecords={sortableOrders.length}
        />
      </div>
    </div>
  );
};

export default OpenOrdersPage;
