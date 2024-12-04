import { Copy } from "lucide-react";
import React from "react";

const CopyButton = ({ code }: { code: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        console.log("Code copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy code: ", err);
      }
    );
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-4 top-10 p-1 text-xs bg-gray-200 text-black rounded-sm"
    >
      <Copy className="size-4" />
    </button>
  );
};

export default CopyButton;
