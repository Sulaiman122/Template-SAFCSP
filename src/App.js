import Header from './components/Header';
import React from 'react';
import { docs, projects } from './api'
import ListDocs from './components/documents/ListDocs';
import ListProjects from './components/projects/ListProjects';
import Footer from './components/Footer';
import './App.css';




const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <ListDocs Docs={docs} />
        <ListProjects Projects={projects} />
      </div>
      <Footer />
    </>
  );
}

export default App;
