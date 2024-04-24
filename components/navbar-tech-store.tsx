"use client";

import { Laptop2 } from "lucide-react";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TechStore = () => {
  const router = useRouter();
  return (
    <div className='ml-auto flex items-center pr-2'>
      <Button
        className='flex items-center rounded-full bg-black px-4 py-2'
        onClick={() =>
          router.push("https://next-ecommerce-purrfectfits.vercel.app/")
        }>
        <Laptop2 size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>Tech Store</span>
      </Button>
    </div>
  );
};

export default TechStore;
