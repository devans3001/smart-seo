import Otherpart from "./Otherpart";
import Lol from "./../assets/abc.png"


function NextPart() {
  return (
  //   <div className="px-5 flex flex-col md:flex-row gap-6 md:max-h-[90dvh] bg-amber-400">
  //   <div className="relative w-full h-full">
  //     <img src={Lol} alt="Main" className="object-cover max-w-[80%] md:object-contain" />
  //   </div>
 

  //   <Otherpart />
  // </div>
  <div className="mt-7 px-5 md:px-0 flex flex-col md:flex-row gap-6 md:h-[90dvh] md:mx-auto overflow-hidden md:w-[85dvw] ">
  {/* Image container with constrained dimensions */}
  <div className="w-full md:h-[80%] items-start md:self-center flex md:items-center md:justify-start ">
    <img 
      src={Lol} 
      alt="Main" 
      className="h-full max-w-[90%] md:max-w-full object-contain" 
    />
  </div>
  
  <div className="min-h-0 flex items-center justify-end"> {/* For Otherpart */}
    <Otherpart />
  </div>
</div>
  )
}
export default NextPart


function Img({ url, more }) {
    return (
      <img
        src={url}
        alt="Decorative image" // Always add meaningful alt text
        className={`absolute ${more} w-[15rem] md:w-[18rem] lg:w-[20rem] xl:w-[22rem] max-w-[22rem] transition-all duration-300`}
      />
    );
  }
  