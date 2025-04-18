import Otherpart from "./Otherpart";
import Lol from "./../assets/abc.png"


function NextPart() {
  return (
    <div
    class="next px-5 min-h-[95dvh] flex gap-2 flex-col md:flex-row mt-5 md:min-h-0 md:max-h-[95dvh]"
  >
    <div
      class="flex-1 flex flex-col items-start py-5 w-full bg-blue-400 md:min-w-[50dvw] md:items-center"
    >

     <img src={Lol} className="w-full h-full object-cover "/>
    </div>

    <Otherpart />
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
  