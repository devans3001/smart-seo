import sty from "../Hero/nav.module.css"


function Pages() {
  return (
     <li className={`relative group cursor-pointer ${sty.parent}`}>
           Pages
           {/* Dropdown */}
           {/* <ul className={`py-2  ${sty.child}`}>
             <li className="">About </li>
             <li className="">Services </li>
             <li className="">Our Team</li>
             <li className="">FAQ</li>
             <li className="">Pricing</li>
             <li className="">Tools</li>
           </ul> */}
         </li>
  )
}
export default Pages