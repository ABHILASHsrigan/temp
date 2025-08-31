import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LibraryNavbar from "./Components/Navbar";
import Fines from "./Components/Fines";
import Issues from "./Components/Issues";
import Members from "./Components/Member";
import Books from "./Components/Books";
import Description from "./Components/Description";
import BubbleBackground from "./Components/BubbleBackground"; 

function App() {
  return (
    <>
      {/* Background Bubbles */}
      <BubbleBackground />

      <LibraryNavbar />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Description/:id" element={<Description />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Fines" element={<Fines />} />
        <Route path="/Issues" element={<Issues />} />
        <Route path="*" element={<h1>Page-Not-Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
