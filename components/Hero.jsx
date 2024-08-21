import Land from "@components/Land";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="border border-gray-400 w-full flex flex-row h-full ">
        
        
        <div className="w-full h-full flex flex-col gap-3 my-auto p-32">
          <div className="flex flex-row gap-2 items-center">
            <p className="bg-gray-700 h-[2px] w-7"></p>
            <Link className=" text-xl" href={'/best'}>OUR BESTSELLERS</Link>
          </div>
          
          <p className="text-6xl">Latest Arrivals</p>

          <div className="flex flex-row gap-2 items-center">
          <Link className=" text-xl" href={'/best'}>SHOP NOW</Link>
            <p className="bg-gray-700 h-[2px] w-7"></p>
          </div>

        </div>
        
        
        
        <div className="w-full h-full">
        <Land/>
        </div>
      </div>
    </div>
  )
}
   