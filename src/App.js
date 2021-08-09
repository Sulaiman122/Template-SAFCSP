import Header from './components/Header';
import React, { Component } from 'react';
import ListDocs from './components/Doc/listDocs';
import ListProjects from './components/Project/listProjects';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <div className="container">

        <Header />

        <div className="section">
          <p>الـتوثـيق</p>
          <ListDocs />
        </div>

        <div className="section">
          <p>مشاريعنا</p>
          <ListProjects />
        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
