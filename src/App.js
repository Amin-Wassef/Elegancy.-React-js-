import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import Nav2 from "./Components/nav_bar_2";
import Nav1 from "./Components/nav_bar_1";
import Welcome_bg from "./Components/welcome_bg";
import Categories from "./Components/products";
import About from "./Components/about";
import Team from "./Components/team";
import Staff_bg from "./Components/staff_bg";
import Map from "./Components/map";
import Footer from "./Components/footer";

const App = () => {
  return (
    <ChakraProvider>
      <Nav1 />
      <Nav2 />
      <Welcome_bg />
      <Categories />
      <About />
      <Team />
      <Staff_bg />
      <Map />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
