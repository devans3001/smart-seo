

function Solution() {
  return (
    <div
    className="solution p-5 md:px-0 mt-5 flex flex-col gap-5 md:flex-row justify-between items-start  md:w-[85dvw] md:mx-auto"
  >
    <div className="one md:w-[50%]">
      <h3 className="text-lg text-[#080337] uppercase md:text-xl font-bold">creative solutions</h3>
      <h1 className="text-3xl font-bold text-[#080337] md:text-5xl md:mt-5">
        We make unique & memorable brands
      </h1>
    </div>

    <div className="two md:w-[50%] md:text-xl flex flex-col gap-5 items-start md:p-5 ">
      <span className="text-[#6b6e7c]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque lorem in voluptate
        velit iusto odio dignissimos duci esse.
      </span>
      <span className="text-[#6b6e7c]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae.
      </span>
      <button
        className="border-b-2 border-[#080337] leading-loose text-[#080337] text-lg font-semibold"
      >
        Read more
      </button>
    </div>
  </div>

  )
}
export default Solution