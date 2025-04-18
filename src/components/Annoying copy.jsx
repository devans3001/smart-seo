import Ana from "./../assets/def.png"


function Annoying() {
  return (
    <div className="min-h-[80dvh] px-5 my-5 relative flex flex-col gap-4 md:w-[85dvw] md:mx-auto">
        <div className="flex flex-col items-end py-5 w-full">
            <img src={Ana} alt=""  className="w-[80%] h-full object-cover"/>
        </div>
        <div className="text-[#080337]">
            <h3 className="text-lg">who are we</h3>
            <h1  className="text-3xl font-bold">we provide the best digital services</h1>
            <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates iste inventore dolorem odio ullam a molestias magni quisquam quidem!
            </p>
            <button
            className="mt-6 bg-[#00b4ca] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FF4C00]/80 transition duration-300 ease-in-out"
          >
            Discover Now
          </button>
        </div>

        <img loading="lazy" decoding="async" width="70" height="70" src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3i1.png" className="absolute top-0 left-5 w-[20%]" alt=""></img>
    </div>
  )
}
export default Annoying