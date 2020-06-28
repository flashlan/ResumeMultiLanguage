import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import DiagramWidget from './components/myroadmap/myroadmap';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';

const App = () => {

  
  return (
    <div className="App">

      <Header
        title="header"
        subtitle={Portfolio}
        dark={true}
        id="header"
      />
      <About
        title="about"
        subtitle={Portfolio}
        dark={true}
        id="about"
        resumeData={resumeData} />
      <Resume
        title="resume"
        subtitle={Portfolio}
        dark={true}
        id="resume"
      />
      <Portfolio
        title="portfolio"
        subtitle={Portfolio}
        dark={true}
        id="portfolio"
      />
      <DiagramWidget
        title="myroadmap"
        subtitle={Portfolio}
        dark={true}
        id="pmyroadmap"
      />
      <ContactUs
        title="contact"
        subtitle={Portfolio}
        dark={true}
        id="contact"
      />
      <Footer />
    </div>
  );
}
export default App;
