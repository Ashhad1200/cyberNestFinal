import "./App.css";
import Footer from "./Components/Footer";
import MainLayout from "./Components/MainLayout";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <MainLayout />
      </div>
      <Footer />
    </>
  );
}

export default App;
