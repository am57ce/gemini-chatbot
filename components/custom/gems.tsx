import { GemIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Gems = ({ gem, setGem }: { gem: string; setGem: any }) => {
  const handleSelect = (value: string) => {
    setGem(value);
    // Trigger a page refresh with the selected gem
    window.location.href = `?gem=${value}`;
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border-2 border-green-500 p-2 rounded-md bg-[#27272a]">
          <span className="flex gap-2">
            <p className="font-bold capitalize text-white">
              {gem === "normal" ? `Try Gems` : gem}
            </p>
            <GemIcon className="text-white" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>/Gems/</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => handleSelect("normal")}>
            Normal
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("programmer")}>
            Programmer
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("poet")}>
            Poet
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("friend")}>
            Friend
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("teacher")}>
            Teacher
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("Joker")}>
            Joker
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Gems;
