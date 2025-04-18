import Ana from "./../assets/def.png"


function Annoying() {
  return (
    <div className="relative mt-7 px-5 md:px-0 flex flex-col md:flex-row-reverse gap-6 md:h-[90dvh] md:mx-auto overflow-hidden md:w-[85dvw] ">

    <div className=" relative w-full md:h-[80%] items-end md:self-center flex md:items-center justify-end ">
        <img 
          src={Ana} 
          alt="Main" 
          className="h-full max-w-[90%] md:max-w-full object-contain" 
        />
      </div>
        <div className="text-[#080337] min-h-0 flex items-center justify-end">
          <div className="flex flex-col gap-4 items-start">

            <h3 className="text-lg uppercase md:text-xl md:font-bold ">who are we</h3>
            <h1  className="text-3xl font-bold  md:text-6xl">We provide the best digital services</h1>
            <p className="text-md">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
            </p>
            <button
            className="mt-3 bg-[#00b4ca] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FF4C00]/80 transition duration-300 ease-in-out"
            >
            Discover Now
          </button>
        </div>

        <img loading="lazy" decoding="async" width="70" height="70" src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3i1.png" className="md:hidden absolute top-0 left-5 w-[20%]" alt=""></img>
            </div>
    </div>
  )
}
export default Annoying