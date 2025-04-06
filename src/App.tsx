import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="px-5 sm:w-[90%]  md:w-[80%] md:mx-auto lg:w-[70%] lg:mx-auto xl:w-[60%] xl:mx-auto 2xl:w-[50%] 2xl:mx-auto">
      <Hero />
      <Project />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
