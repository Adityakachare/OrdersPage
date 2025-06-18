import React from "react";
import { Download } from "lucide-react";

const DownloadButton = () => {
  return (
    <button className="bg-gray-100 text-gray-800 px-5 py-3 rounded-md text-base font-medium flex items-center gap-2 cursor-pointer">
      <Download size={20} strokeWidth={2.5} className="w-5 h-5" />
      Download
    </button>
  );
};

export default DownloadButton;