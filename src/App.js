import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reactive Contacts</h1>
        </header>
            <div className="row options">
                <div className="col-xs-6 col-sm-6 col-md-6 junk">
                    <p className="optionsName">Contacts</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <p className="optionsName">Favorites</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    
                </div>
                <div className="col-md-6">
    
                </div>
            </div>
      </div>
    );
  }
}

export default App;
