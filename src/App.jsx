import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  About,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
