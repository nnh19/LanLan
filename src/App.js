import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Login from "./Login";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const hanleScroll = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    if (window.scrollY >= 10) {
      setIsOpen(true);
    } else setIsOpen(false);
  };
  window.addEventListener("wheel", hanleScroll);

  const onClose = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Content />
      <Login setIsOpen={onClose} open={isOpen} />
    </div>
  );
}

export default App;
