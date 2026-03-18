import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookText, Scissors } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-8 p-4 flex flex-col items-center justify-center">
      <div className="flex mb-2 text-gray-500">
        <BookText />
        Enter you notes here
      </div>

      <div className="flex flex-col p-2 w-full max-w-[450px]">
        <form>
          <Textarea required className="mb-2"/>
          <Button type="submit" className="w-full bg-indigo-500 text-white">
            <Scissors />
            Summarize Now
          </Button>
        </form>
      </div>
    </div>
  )
}