function Footer() {
  return (
    <footer className="relative text-white pt-0 max-w-[100dvw] md:h-[75dvh]">
      {/* <div className="w-full overflow-hidden leading-none rotate-180 -mb-[1px]"> */}
      <svg
        className="w-full h-[100px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#060E18"
          d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,197.3C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/* </div>  */}

      <div className="w-full  bg-[#060E18] mx-auto md:h-full md:flex md:flex-col gap-6 md:pb-5">
        <div className="flex-1 md:w-[85dvw] md:mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm md:text-lg">
          <div className="">
            <h3 className="font-semibold text-white mb-4 text-base">Office</h3>

            <div className="flex flex-col gap-3 ">
              <p className="text-gray-400">
                Germany —<br />
                785 15th Street, Office 478
                <br />
                Berlin, De 81566
              </p>
              <p className="mt-2 text-gray-400">info@email.com</p>
              <p className="mt-1 text-white font-semibold">+1 840 841 25 69</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Links</h3>
            <ul className="text-gray-400 space-y-2">
              {["Home", "Services", " About Us", "Our Team", "Contacts"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:ml-2 duration-300 transition-all"
                    >
                      {social}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Socials</h3>
            <ul className="text-gray-400 space-y-2">
              {["Facebook", "Twitter", "Dribbble", "Instagram"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:ml-2 duration-300 transition-all"
                    >
                      {social}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-base">
              Newsletter
            </h3>
            <form className="flex items-center bg-[#111827] rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12H8m0 0H6m2 0l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none text-white placeholder:text-gray-400 flex-1"
              />
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full p-2 ml-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <hr className="md:w-[85dvw] md:mx-auto h-px px-5 border-0.5" />
        <div className="md:w-[85dvw] md:mx-auto text-center md:text-lg text-md md:font-bold md:text-left text-gray-500 mt-2 md:mt-0 pb-2">
          AxiomThemes © 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
