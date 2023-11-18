import Achievements from "./components/Achievements";
import Book from "./components/Book";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Content5 from "./components/Content5";
import Content6 from "./components/Content6";
import Content8 from "./components/Content8";
import Content9 from "./components/Content9";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="">
          <Hero />
        </div>
        <div className="">
          <Achievements />
        </div>
        <div>
          <Content1 />
        </div>
        <div>
          <Content2 />
        </div>
        <div>
          <Content3 />
        </div>
        <div>
          <Content4 />
        </div>
        <div>
          <Content5 />
        </div>
        <div>
          <Content6 />
        </div>
        <div>
          <Content8 />
        </div>
        <div>
          <Content9 />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <Book />
        </div>
      </main>
    </>
  );
}

export default App;
