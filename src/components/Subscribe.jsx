import { LiaTelegramPlane } from "react-icons/lia";

function Subscribe() {
  return (
    <div className="subscribe px-5 flex flex-col md:flex-row md:w-[85dvw] md:mx-auto gap-5">
    <h1 className="text-[#080337] text-2xl font-bold md:text-5xl md:max-w-[40%]">Subscribe for the exclusive updates!</h1>
    <form action="" className="flex-1 flex flex-col gap-3">
      <div className="flex items-center justify-center overflow-x-hidden">
        <div
          className="flex flex-wrap items-center gap-3 w-full max-w-[600px] mt-3"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="flex-1 min-w-0 p-2 md:px-5 md:py-3 rounded-full text-sm sm:text-base font-semibold bg-white"
          />
          <button
            type="submit"
            className="bg-[#5300f1] flex items-center gap-2 text-white rounded-full md:px-7 md:py-3 px-5 py-2 text-sm sm:text-base whitespace-nowrap"
          >
            <LiaTelegramPlane/>
            <span>

            Subscribe
            </span>
          </button>
        </div>
      </div>

      <label htmlFor="" className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-gray-500 font-thin">

            I agree to the 
            <span className="cursor-pointer underline">
{" "}
                Privacy Policy.
            </span>
        </p>
      </label>
    </form>
  </div>
  )
}
export default Subscribe