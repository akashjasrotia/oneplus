import React from "react";
import oneplus from "../assets/oneplus.png";
import { ShoppingCart, Search, Menu, CircleUserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed z-100 font-oneplus px-1.5 py-6 border-gray-200 flex items-center w-full h-12 lg:px-14 justify-between ">
      <div className="shrink-0 w-26 ">
        <img src={oneplus} className="cursor-pointer" />
      </div>
      <div className="shrink-0 hidden text-[14px] lg:flex lg:flex-row gap-10 font-normal">
        <a className="cursor-pointer">
          Store
        </a>
        <a className="cursor-pointer">
          Phone
        </a>
        <a className="cursor-pointer">
          Tablet
        </a>
        <a className="cursor-pointer">
          Wearables
        </a>
        <a className="cursor-pointer">
          Audio
        </a>
        <a className="cursor-pointer">
          More Products
        </a>
        <a className="cursor-pointer">
          OneTopia
        </a>
        <a className="cursor-pointer">
          Community
        </a>
        <a className="cursor-pointer">
          Support
        </a>
      </div>

      <div className="flex gap-4 mr-4 lg:gap-8 shrink-0">
        <Search className="cursor-pointer" size={20} />
        <ShoppingCart size={20} className="cursor-pointer" />
        <Menu className="lg:hidden cursor-pointer" size={20} />
        <CircleUserRound className="hidden lg:block cursor-pointer" size={18} />
      </div>
    </div>
  );
}
