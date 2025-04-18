import "./App.css"
import NextPart from "./components/NextPart"
import CounterSection from "./components/CounterPart"
import Solution from "./components/Solution"
import Subscribe from "./components/Subscribe"
import ImageGrid from "./components/ImageGrid"
import Footer from "./components/Footer"
import "swiper/css";
import SVGCarousel from "./components/SVGCarousel"
import Blogs from "./components/Blogs"
import Testimonial from "./components/Testimonial"
import Annoying from "./components/Annoying"
import Hero from "./components/Hero/Hero"


function App() {
  return (
    <div className="min-w-full w-full">
      <Hero />
      <NextPart/>
      <CounterSection />
      <Solution/>
      <SVGCarousel/>
      <Subscribe/>
      <Testimonial  />
      <Annoying />
      <ImageGrid/>
      <Blogs/>
      <Footer/>

    </div>
  )
}
export default App