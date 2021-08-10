import Header from './components/header';
import React from 'react';
import { Docs, Projects } from './api'
import ListDocs from './components/documents/ListDocs';
import ListProjects from './components/projects/ListProjects';
import Footer from './components/footer';
import './App.css';




const App = () => {
  return (
    <>
      <div className="container">

        <Header />

        <ListDocs Docs={Docs} />

        <ListProjects Projects={Projects} />

      </div>
      <Footer />
    </>
  );
}

export default App;
