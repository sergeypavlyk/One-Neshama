import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import GeneralHomeScreen from './components/GeneralHomeScreen.jsx';
import PersonalHomeScreen from './components/PersonalHomeScreen.jsx';

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <Header></Header>
      </header>

      <main className="App__main">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={GeneralHomeScreen}/>
            <Route path='/personal-home' component={PersonalHomeScreen}/>
          </Switch>
        </BrowserRouter>
      </main>

      <footer className="App__footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
