import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { ConfigureStore } from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends Component {

  
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
