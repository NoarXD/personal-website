import "./App.css";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotPage from "./pages/NotPage";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Title from "./component/Title";

function App() {
    return (
        <>
            <div className="text-white">
                <Router>
                    <Title />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/skill" element={<Skill />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="*" element={<NotPage />} />
                    </Routes>
                    <Navbar />
                </Router>
            </div>
        </>
    );
}

export default App;
