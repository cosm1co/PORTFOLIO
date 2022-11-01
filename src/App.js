import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Federico's Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Portfolio" />
      </Helmet> */}
     <NavBar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
