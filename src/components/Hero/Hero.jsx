import NavBar from "./Nav";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <div className="h-[55dvh] md:h-screen relative">
      <NavBar />
      <img
        className="w-full h-full object-cover"
        src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3mbbg.png"
        alt=""
      />

      <HeroContent/>
    </div>
  );
}
export default Hero;
