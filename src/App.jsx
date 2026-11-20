import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

import Router from "./component/Routing/Router";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b1020] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute right-[-150px] top-[300px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[30%] h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[120px]" />
      </div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
