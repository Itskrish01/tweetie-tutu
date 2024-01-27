import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Button } from "../ui/button"
import { Info } from "lucide-react"



export default function InfoHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="border border-slate-300" size="icon">
            <Info />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
         
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Help?</h4>
            <p className="text-sm">
              Click on the items you want to edit, its just that easy ✨😊
            </p>
           
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
