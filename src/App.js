import Header from './components/header';
import React from 'react';
import { docs, projects } from './api'
import ListDocs from './components/documents/listDocs';
import ListProjects from './components/projects/listProjects';
import Footer from './components/footer';
import './App.css';




const App = () => {
  return (
    <>
      <div className="container">

        <Header />

        <ListDocs docs={docs} />

        <ListProjects projects={projects} />

      </div>
      <Footer />
    </>
  );
}

export default App;
