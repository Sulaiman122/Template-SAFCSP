import Book_1 from './img/book1.png';
import Book_2 from './img/book2.png';
import Book_3 from './img/book3.png';
import Header from './components/Header';
import Doc from './components/Doc';
import React, { Component } from 'react';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      { console.log(window.innerWidth)}
      <div className="container">

        <Header />

        <div className="section">
          <p>الـتوثـيق</p>
          <Doc />
        </div>

        <div className="section">
          <p>مشاريعنا</p>
          <Projects />
        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
