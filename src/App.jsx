import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Chat from './components/chat/Chat';

const App = () => {
  setTimeout(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch('https://ghazi-chatbot.herokuapp.com/', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));

    document.getElementById('loading').style.display = 'none';
  }, 4000);

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
};

export default App;
