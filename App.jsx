import React from "react";
import TopBar from "./components/TopBar";
import LeftPanel from "./components/LeftPanel";
import MiddlePanel from "./components/MiddlePanel";
import RightPanel from "./components/RightPanel";

const App = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden w-full h-full">
      {/* Background Layer - Clear Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://live.staticflickr.com/65535/50962736078_fed7e208a6_o.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* Dark overlay (subtle opacity for readability) */}
      <div className="fixed inset-0 bg-black/30 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        <TopBar />
        <div className="flex h-screen pt-16">
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
