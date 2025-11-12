// App.jsx
import React from "react";
import TopBar from "./components/TopBar";
import LeftPanel from "./components/LeftPanel";
import MiddlePanel from "./components/MiddlePanel";
import RightPanel from "./components/RightPanel";

const App = () => {
  return (
    <div 
      className="min-h-screen text-white relative overflow-hidden w-full h-full"
    >
      {/* Blurred Background Layer - Covers entire page */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/1200x/47/61/94/476194333404f19bbc892a0573c83f3e.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'blur(20px)',
          transform: 'scale(1.15)',
          width: '100%',
          height: '100%'
        }}
      ></div>
      {/* Overall Background Overlay - Very dark overlay */}
      <div className="fixed inset-0 bg-black/70 z-0"></div>
      
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
