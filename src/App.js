import React from 'react';
import Header from './components/Header';
import StatusDiagram from './components/StatusDiagram';
import ErrorContent from './components/ErrorContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <StatusDiagram />
        <ErrorContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;