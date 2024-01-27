import { ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { cn } from "../../lib/utils";
import { useTweetContext } from "../../store/context";

const BG_COLORS = [
  {
    label: "Gotham",
    colorCode: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
  },
  {
    label: "Sunset",
    colorCode:
      "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100",
  },
  {
    label: "Cotton Candy",
    colorCode:
      "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400",
  },
  {
    label: "Lavender",
    colorCode: "bg-gradient-to-r from-indigo-300 to-purple-400",
  },
  {
    label: 'White',
    colorCode: 'bg-white',
  }
];

export function BgColorDropdown() {
  const { selectedBgColor, setSelectedBgColor } = useTweetContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between border border-slate-300 p-1 rounded-md">
          <div
            className={cn("h-4 w-4  rounded-full border border-slate-300", selectedBgColor.colorCode)}
          ></div>
          <ChevronUp className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" >
        <DropdownMenuGroup>
          {BG_COLORS.map((colorItem) => (
            <DropdownMenuItem onClick={() => setSelectedBgColor(colorItem)} className="flex items-center gap-2">
              <div
                className={cn("h-3 w-3 rounded-full border border-slate-300", colorItem.colorCode)}
              ></div>
              {colorItem.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
