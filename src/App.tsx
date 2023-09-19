import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
    return (
        <>
            <div className="bg-stone-950 h-[100vh] text-white">
                <Navbar />
                <Home />
            </div>
        </>
    );
}

export default App;
