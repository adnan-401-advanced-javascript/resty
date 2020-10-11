import React from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
