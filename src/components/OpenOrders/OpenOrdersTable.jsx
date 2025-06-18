import React from "react";
import { ArrowDownUp, Funnel, MoreHorizontal, Radio } from "lucide-react";

const OpenOrdersTable = ({
  currentRecords,
  handleSort,
  sortConfig,
  getSortIcon,
  handleTickerClick,
  selectedTickers,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-50 border-b border-gray-50">
          <tr>
            <th className="px-4 py-3 text-left border-r border-gray-50">
              <button
                onClick={() => handleSort("time")}
                className="flex items-center text-sm font-bold text-black hover:text-gray-900 gap-1"
              >
                Time
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "time"
                  )} ${sortConfig.key === "time" ? "" : "opacity-50"}`}
                />
                <Funnel size={16} strokeWidth={1.5} />
              </button>
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-50">
              <button
                onClick={() => handleSort("client")}
                className="flex items-center text-sm font-bold text-black hover:text-gray-900 gap-1"
              >
                Client
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "client"
                  )} ${sortConfig.key === "client" ? "" : "opacity-50"}`}
                />
              </button>
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-50">
              <button
                onClick={() => handleSort("ticker")}
                className="flex items-center text-sm font-bold text-black hover:text-gray-900 gap-1"
              >
                Ticker
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "ticker"
                  )} ${sortConfig.key === "ticker" ? "" : "opacity-50"}`}
                />
              </button>
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-50">
              <button
                onClick={() => handleSort("side")}
                className="flex items-center text-sm font-bold text-black hover:text-gray-900 gap-1"
              >
                Side
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "side"
                  )} ${sortConfig.key === "side" ? "" : "opacity-50"}`}
                />
                <Funnel size={16} strokeWidth={1.5} />
              </button>
            </th>
            <th className="px-4 py-3 text-left border-r border-gray-50 hidden md:table-cell">
              <button
                onClick={() => handleSort("product")}
                className="flex items-center text-sm font-bold text-black hover:text-gray-900 gap-1"
              >
                Product
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "product"
                  )} ${sortConfig.key === "product" ? "" : "opacity-50"}`}
                />
                <Funnel size={16} strokeWidth={1.5} />
              </button>
            </th>
            <th className="px-4 py-3 text-right border-r border-gray-50">
              <button
                onClick={() => handleSort("qty")}
                className="flex items-center justify-end text-sm font-bold text-black hover:text-gray-900 w-full gap-1"
              >
                Qty (Executed/Total)
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "qty"
                  )} ${sortConfig.key === "qty" ? "" : "opacity-50"}`}
                />
              </button>
            </th>
            <th className="px-4 py-3 text-right border-r border-gray-50">
              <button
                onClick={() => handleSort("price")}
                className="flex items-center justify-end text-sm font-bold text-black hover:text-gray-900 w-full gap-1"
              >
                Price
                <ArrowDownUp
                  size={16}
                  strokeWidth={1}
                  className={`ml-1 transition-transform duration-200 ${getSortIcon(
                    "price"
                  )} ${sortConfig.key === "price" ? "" : "opacity-50"}`}
                />
              </button>
            </th>
            <th className="px-4 py-3 text-center">
              <span className="text-sm font-bold text-black">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {currentRecords.map((order, index) => (
            <tr
              key={index}
              onClick={() => handleTickerClick(order.ticker)}
              className="hover:bg-gray-50 border-b border-gray-200 cursor-pointer"
            >
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-50">
                {order.time}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-50">
                {order.client}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 font-medium border-r border-gray-50 flex items-center">
                {order.ticker}
                {selectedTickers.includes(order.ticker) && (
                  <Radio
                    size={16}
                    strokeWidth={2}
                    className="text-blue-600 mr-1 ml-2"
                  />
                )}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-50">
                {order.side}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell border-r border-gray-50">
                {order.product}
              </td>
              <td className="px-4 py-3 text-sm text-right text-gray-900 border-r border-gray-50 whitespace-nowrap">
                {order.qty}
              </td>
              <td className="px-4 py-3 text-sm text-right text-gray-900 border-r border-gray-50 whitespace-nowrap">
                {order.price}
              </td>
              <td className="px-4 py-3 text-center">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpenOrdersTable;