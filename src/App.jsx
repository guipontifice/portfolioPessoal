import { useState } from "react";
import viteLogo from "/vite.svg";
import "./styles/scss/styles.scss";
import Header from "./components/header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        {/* <h1>React Router</h1> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
