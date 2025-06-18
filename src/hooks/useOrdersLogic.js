// hooks/useOrdersLogic.js
import { useState, useMemo } from "react";
import { ordersData } from "@/data/ordersData";

const useOrdersLogic = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedTickers, setSelectedTickers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10); 

  const sortableOrders = useMemo(() => {
    let sortable = [...ordersData];

    if (sortConfig.key !== null) {
      sortable.sort((a, b) => {
        const key = sortConfig.key;
        let valA = a[key];
        let valB = b[key];

        if (key === "price") {
          valA = parseFloat(String(valA).replace(/,/g, ""));
          valB = parseFloat(String(valB).replace(/,/g, ""));
        } else if (key === "qty") {
          valA = parseFloat(String(valA).split("/")[0]);
          valB = parseFloat(String(valB).split("/")[0]);
        }

        let comparison = 0;
        if (typeof valA === "string" && typeof valB === "string") {
          comparison = valA.localeCompare(valB);
        } else {
          if (valA < valB) {
            comparison = -1;
          } else if (valA > valB) {
            comparison = 1;
          }
        }

        return sortConfig.direction === "asc" ? comparison : -comparison;
      });
    }
    return sortable;
  }, [ordersData, sortConfig]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortableOrders.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(sortableOrders.length / recordsPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); 
  };

  const getSortIcon = (columnKey) => {
    let rotationClass = "";
    let opacityClass = "opacity-50";

    if (sortConfig.key === columnKey) {
      opacityClass = "";
      if (sortConfig.direction === "asc") {
        rotationClass = "rotate-0";
      } else {
        rotationClass = "rotate-180";
      }
    }

    return rotationClass; 
  };

  const handleTickerClick = (ticker) => {
    if (!selectedTickers.includes(ticker)) {
      setSelectedTickers((prev) => [...prev, ticker]);
    }
  };

  const nextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
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
  };
};

export default useOrdersLogic;