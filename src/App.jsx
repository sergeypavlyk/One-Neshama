import React from 'react';
import './sass/main.scss';
import Header from './components/Header.jsx';
import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <Header></Header>
      </header>

      <main className="App__main">
        <section className="App__main-intro-screen">
          <HomeNavbar></HomeNavbar>
        </section>
      </main>

      <footer className="App__footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
