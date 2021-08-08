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
      <div className="container">

        <Header />

        <div className="section">
          <p>الـتوثـيق</p>
          <Doc number='١' image={Book_1} />
          <Doc number='٢' image={Book_2} />
          <Doc number='٣' image={Book_2} />
        </div>

        <div className="section">
          <p>مشاريعنا</p>
          <Projects number='١' image={Book_1} done={true} />
          <Projects number='٢' image={Book_2} done={true} />
          <Projects number='٣' image={Book_2} done={true} />
          <Projects number='٤' image={Book_3} done={false} />
          <Projects number='٥' image={Book_3} done={false} />
        </div>

      </div>
      <Footer />

    </>
  );
}

export default App;
