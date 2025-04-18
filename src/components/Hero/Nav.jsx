import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import sty from "../Hero/nav.module.css"
import Pages from "./Pages";
import BlogPage from "./BlogPage";
import Portfolio from "./Portfolio";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 absolute top-0 w-full z-1000 bg-transparent">
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="//seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse1-nocopyright.png"
        alt="company logo"
        className="h-10 w-auto"
      />
    </div>



    {/* Navigation Links */}
    <ul className={`hidden md:flex gap-8 items-center text-white font-semibold text-lg relative `}>
      <li className={`border-b-2 border-white pb-1 ${sty.parent}`}>Home

         {/* <ul className={`py-2  ${sty.child}`}>
                     <li className="">SEO Company </li>
                     <li className="">Marketing Agency </li>
                     <li className="">Creative Agency</li>
                     <li className="">Advertising Agency</li>
             
                   </ul> */}
      </li>

    <Pages/>

      <Portfolio/>
     <BlogPage/>
      <li>Contacts</li>
    </ul>

    <div className="hidden md:flex items-center gap-6 text-white">
      <IoSearch className=" text-2xl cursor-pointer" />
      <div className="flex items-center gap-2">
        <FiPhoneCall className="text-xl" />
        <span className="font-bold text-2xl">1 800 458 56 97</span>
      </div>
      <button className="bg-[#4f00ff] hover:bg-[#3b00c4] text-white font-semibold py-2 px-5 rounded-full transition">
        Let’s talk
      </button>
    </div>

    <div className="md:hidden text-white text-2xl">
      <FiMenu/>
    </div>
  </nav>
  )
}
export default NavBar