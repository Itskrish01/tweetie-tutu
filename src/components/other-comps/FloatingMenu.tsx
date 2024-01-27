import React, { FC } from "react";
import { BgColorDropdown } from "./BgColorDropdown";
import { Switch } from "../ui/switch";
import { useTweetContext } from "../../store/context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

interface FloatingMenu_I {
  onSaveAs: (type: string) => void;
}

const FloatingMenu: FC<FloatingMenu_I> = ({ onSaveAs }) => {
  const { theme, setTheme } = useTweetContext();

  return (
    <div className="bg-white flex gap-6 fixed bottom-12 p-2 left1/2 items-center shadow-xl rounded-lg border-slate-300 border">
      <div className="text-xs space-y-2 text-slate-400 font-medium">
        <p>Background</p>
        <BgColorDropdown />
      </div>
      <div className="space-y-2">
        <p className="text-slate-400 font-medium text-xs">Dark mode</p>
        <div className="flex items-center gap-2 rounded-md">
          <Switch
            id="airplane-mode"
            defaultChecked={theme === "light" ? false : true}
            onCheckedChange={(checked) => {
              if (checked) {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          />
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex gap-2 items-center">
              <Button variant="outline" onClick={() => onSaveAs("png")}>Export</Button>
              <Button  className="px-1" variant="outline">
                <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => onSaveAs("png")}>
                Save PNG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSaveAs("jpeg")}>
                Save JPG
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSaveAs("svg")}>
                Save SVG
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FloatingMenu;
