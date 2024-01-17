import { useState } from "react";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
