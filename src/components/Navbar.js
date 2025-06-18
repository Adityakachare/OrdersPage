"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import Image from "next/image";
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const marketData = [
    { name: "SIGNORIA", value: "0.00", change: "neutral" },
    { name: "NIFTY BANK", value: "52,323.30", change: "positive" },
    { name: "NIFTY FIN SERVICE", value: "25,255.75", change: "positive" },
    { name: "RELCHEMO", value: "162.73", change: "positive" },
  ];

  const getChangeColor = (change) => {
    switch (change) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 py-3 overflow-x-auto">
        <div className="flex gap-6 min-w-max items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={Logo}
              alt="Company Logo"
              width={50} 
              height={50} 
              className="h-8 w-auto" 
            />
          </div>

          {/* Market Data */}
          <div className="flex gap-6 overflow-x-auto md:overflow-visible flex-wrap md:flex-nowrap">
            {marketData.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center min-w-[10px]"
              >
                <div className="text-xs text-gray-600 font-medium">
                  {item.name}
                </div>
                <div className={`text-sm ${getChangeColor(item.change)}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center gap-4 ml-auto flex-shrink-0 relative">
            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                MARKETWATCH
              </a>
              <a href="#" className="hover:text-gray-900">
                EXCHANGE FILES
              </a>
              <button className="flex items-center gap-1 hover:text-gray-900">
                PORTFOLIO <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                FUNDS <ChevronDown className="w-4 h-4" />
              </button>
            </nav>

            <div
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-sm text-gray-700 cursor-pointer"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              LK
            </div>

            {showMobileMenu && (
              <div className="fixed top-16 right-4 z-50 bg-white border border-gray-200 rounded-md shadow-lg p-3 flex flex-col gap-2 text-sm text-gray-600 md:hidden w-48">
                <a href="#" className="hover:text-gray-900">
                  MARKETWATCH
                </a>
                <a href="#" className="hover:text-gray-900">
                  EXCHANGE FILES
                </a>
                <button className="flex items-center gap-1 hover:text-gray-900">
                  PORTFOLIO <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 hover:text-gray-900">
                  FUNDS <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
