import React, { useState } from 'react';
import { HomePage } from './HomePage';
import { WriteRegexPage } from './WriteRegexPage';
import { DrawAutomataPage } from './DrawAutomataPage';
import backgroundImage1 from 'figma:asset/31fc38b171228398a14baef2cd2ad0e94dda370b.png';
import backgroundImage2 from 'figma:asset/03018c962ad3715c76c81a016c1ffdfee2692dc5.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'write-regex':
        return <WriteRegexPage onNavigate={setCurrentPage} />;
      case 'draw-automata':
        return <DrawAutomataPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={backgroundImage1} alt="" className="absolute top-0 left-0 w-full h-1/2 object-cover" />
        <img src={backgroundImage2} alt="" className="absolute bottom-0 right-0 w-full h-1/2 object-cover" />
      </div>
      <div className="absolute inset-0 bg-blue-900/70"></div>
      <div className="relative z-10">
        {renderPage()}
      </div>
    </div>
  );
}