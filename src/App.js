import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/home";
function App() {
  return (
    <div className="w-screen min-h-screen bg-slate-600 flex flex-col font-inter">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
